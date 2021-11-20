# mongoDB + Python

MongoDB Manipulation via Python Package 

<!--more-->
## Abstract
In this article, we're going to demostrate how to use `pymongo` to control mongodb. 

We will implement a simple web crawler to scrap items data from Shopee (a E-commerce Platform), and use it as today's sample data to store it into our mongodb. 


## Goals We Will Complete in this Article
- [x] Develop a simple web crawler
- [x] Understand basic knowledge of `pymongo` 
- [x] Learn basic manipulation of MongoDB
- [x] Acquire basic knowledge of `pytz`



## Install Pymongo via pip
```bash
pip install pymongo
```

## Create Client Object
We import `MongoClient` Object from pymongo, and Initialize it with the `Host` (where Mongo is running), `Username` and `Password`.

> **Notice**:
> 
> `27017` is the default port for Mongo service. We can change it in the config file. 

```python
import os
from pymongo import MongoClient 

MONGO_HOST = os.getenv('MONGO_HOST') # localhost or other host
MONGO_USER = os.getenv('MONGO_USER') 
MONGO_PWD = os.getenv('MONGO_PWD')

client = MongoClient(f'mongodb://{MONGO_USER}:{MONGO_PWD}@{MONGO_HOST}:27017')

```
## Verify Connection of MongoClient

```python
try:
    client.server_info()
    print('Well Connected')
except:
    # error handler 
    print('Connection Error')
```

## Develop A Simple Web Crawler 

### Find Web API

### Send Request to Web API
```python
# set search keyword 
search_keyword = 'iphone'
api_route = f'https://shopee.tw/api/v4/search/search_items?by=relevancy&keyword={search_keyword}&limit=60&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2'

import requests
res = requests.get(api_route)

# check if api reponse correctly
res.status_code
```

```python
# Read the response as JSON format
search_result_json = res.json()
```
### Parsing JSON Structure
By looking into `search_result_json`, we can find a hierarchical structure like below.
```python
{
    'items': [
        'item_basic': {
            'name': '冬季促銷大熱賣 原廠全新Apple iPhone 13 128GB(午夜/星光/粉/紅/藍)',
            'image': 'b7c27cc99aba7955cf1890c50638c2f8',
            ...
        },
        'adsid': 35299839,
        ...
    ], 
    ...
}
```
Now we know that item-related data is in each `item_basic`, we can extract them using python `for` loop.
```python
items_data = search_result_json.get('items')
items_basic_data = [ item.get('item_basic') for item in items_data ]
```

### Data Preprocessing
Let's do some data-cleaning or preprocessing and make it more human-readable.

```python
import pandas as pd
#convert json data to pandas dataframe
items_basic_df = pd.DataFrame(items_basic_data)[['itemid', 'shopid', 'name', 'image']]

# add image url prefix for image hash code
image_url_prefix = 'https://cf.shopee.tw/file/'
items_basic_df['image_url'] = items_basic_df['image'].apply(
    lambda x: image_url_prefix + x
)
items_basic_df.head() # preview, show below
```
| itemid | shopid | name | image | image_url |
| ------ | ------ | ---- | ----- | --------- |
| 158215044 | 16740752 | 透明滿版保護貼 玻璃貼 ... | b73326d54f4d0ab50cd994397197a3d7 | https://cf.shopee.tw/file/b73326d54f4d0ab50cd9... |
| 11052111436 | 272961258 | 限時3天秒殺 PD 閃充線 ... | d6663c9cde823bc32dabade7de1e4c0c |	https://cf.shopee.tw/file/d6663c9cde823bc32dab... |
| 15714606 | 1982863 | Q哥 抗藍光玻璃貼 ... | 547f1dabfb9ee61e1e88f87cf29ebbdc |	https://cf.shopee.tw/file/547f1dabfb9ee61e1e88... |
| 3326952 | 196610 | 水晶盾 真5D曲面滿版保護貼 ... | 4aeebf5cd804f1278f49573984cfd48c |	https://cf.shopee.tw/file/4aeebf5cd804f1278f49... |
| 10407177063 | 444998999 |【鴻威通訊】 iPhone8 /iPhone8 ... |	529051371e5d17bafae2125160a137ce |	https://cf.shopee.tw/file/529051371e5d17bafae2... |


### Time Processing
Before we insert these data, let's add a timestamp to every row. It can help us delete over-old data in the future.
>**Notice**
> 
>Because MongoDB assumes that dates and times are in UTC, care should be taken to ensure that dates and times written to the database reflect UTC
```python
from datetime import datetime
# item_basic_df['update_date'] = datetime.utcnow() # in general situation
items_basic_df['update_date'] = datetime(2021, 1, 1) # for test
```
### From DataFrame to Document
MongoDB uses json-like data type called `Document` to store data. We can use `pandas` built-in function to convert it.
```python
items_basic_document = items_basic_df.to_dict('records')
```
Let's print it to preview
```python
from pprint import pprint
# outline of single document
print('single document (dict)')
pprint(items_basic_document[0])
print('-'*80)
# outline of multi-document
print('multiple document (list of dict)')
pprint(items_basic_document[:2])
```
output
```
single document (dict)
{'image': 'b73326d54f4d0ab50cd994397197a3d7',
 'image_url': 'https://cf.shopee.tw/file/b73326d54f4d0ab50cd994397197a3d7',
 'itemid': 158215044,
 'name': '透明滿版保護貼 玻璃貼 背貼適用iPhone 13 12 11 Pro Max SE2 XR XS X i11 i12',
 'shopid': 16740752,
 'update_date': Timestamp('2021-01-01 00:00:00')}
--------------------------------------------------------------------------------
multiple document (list of dict)
[{'image': 'b73326d54f4d0ab50cd994397197a3d7',
  'image_url': 'https://cf.shopee.tw/file/b73326d54f4d0ab50cd994397197a3d7',
  'itemid': 158215044,
  'name': '透明滿版保護貼 玻璃貼 背貼適用iPhone 13 12 11 Pro Max SE2 XR XS X i11 i12',
  'shopid': 16740752,
  'update_date': Timestamp('2021-01-01 00:00:00')},
 {'image': 'd6663c9cde823bc32dabade7de1e4c0c',
  'image_url': 'https://cf.shopee.tw/file/d6663c9cde823bc32dabade7de1e4c0c',
  'itemid': 11052111436,
  'name': '限時3天秒殺 PD 閃充線 充電線 傳輸線 適用於iPhone 11 12 13 pro max 超級快充線',
  'shopid': 272961258,
  'update_date': Timestamp('2021-01-01 00:00:00')}]
```

>Let's put prepared data aside. There are some things we must know first.

## Database & Collection (Table) Manipulation
Here we are going to create an object to manipulate our database, like getting all the collections (tables) of the database.

### Create a Database: `crawler_test`
```python
crawler_test = client['crawler_test']
```

### Create a Collection (Table): `items` 
```python
# both work
items = crawler_test['items']
items = client['crawler_test']['items']
```

### Get All Collections (Tables)
We need to **insert at least one document** so that the database `crawler_test` & the table `items` will be created.

> **Notice**:
> 
> An important note about collections (and databases) in MongoDB is that they are created lazily - none of the above commands have actually performed any operations on the MongoDB server. Collections and databases are created when the first document is inserted into them.

```python
# Truncate table
items.delete_many({})

# insert one data into table: items
items.insert_one({'key_test': 'value_test'})

# list all tables
table_list = crawler_test.list_collection_names()
print(table_list)
```
output
```
['items']
```

## Insert
Here, we are going to insert prepared-data into our table
 
> if we don't specify `_id` of the document, a `bson.objectid.ObjectId` will be auto-generated like `{'_id': bson.objectid.ObjectId }`.
>
> The rules of  `_id` generation can be refered to the [link](https://docs.mongodb.com/manual/reference/method/ObjectId/).
<!-- 自動生成的 ObjectId 前 4 bytes 會是 時間 -->
### Insert One

Insert one document at once
```python
from pprint import pprint
import copy
items = client['crawler_test']['items'] # specify collection
items.delete_many({}) # Truncate table
one_document = copy.deepcopy(items_basic_document[0])
print('Before Insert:')
pprint(one_document)
print('-'*80)
response_insert_one = items.insert_one(one_document)
print('After Insert:')
pprint(one_document)
```
Output
```
Before Insert:
{'image': 'b73326d54f4d0ab50cd994397197a3d7',
 'image_url': 'https://cf.shopee.tw/file/b73326d54f4d0ab50cd994397197a3d7',
 'itemid': 158215044,
 'name': '透明滿版保護貼 玻璃貼 背貼適用iPhone 13 12 11 Pro Max SE2 XR XS X i11 i12',
 'shopid': 16740752,
 'update_date': Timestamp('2021-11-20 09:48:52.155124+0000', tz='UTC')}
--------------------------------------------------------------------------------
After Insert:
{'_id': ObjectId('6198c488a8bbf780143bec4d'),
 'image': 'b73326d54f4d0ab50cd994397197a3d7',
 'image_url': 'https://cf.shopee.tw/file/b73326d54f4d0ab50cd994397197a3d7',
 'itemid': 158215044,
 'name': '透明滿版保護貼 玻璃貼 背貼適用iPhone 13 12 11 Pro Max SE2 XR XS X i11 i12',
 'shopid': 16740752,
 'update_date': Timestamp('2021-11-20 09:48:52.155124+0000', tz='UTC')}
```

### Insert Many

Insert multiple document at once
```python
import copy
items = client['crawler_test']['items'] # specify collection
items.delete_many({}) # Truncate table
many_document = copy.deepcopy(items_basic_document)
response_insert_many = items.insert_many(many_document)
```

Check ObjectId we just inserted
```python
response_insert_many.inserted_ids[:2]
```
Output
```
[ObjectId('6187ad0ea896a79a2cdae209'), ObjectId('6187ad0ea896a79a2cdae20a')]
```

## Select
Here we are going to select documents we just inserted into the collection

### Select All Documents

Select all documents
```python
items = client['crawler_test']['items'] # specify collection

# equal to SELECT * FROM crawler_test.items
response_select_all = items.find({}) 

# use list iterate response_select_all and store as response_select_all_result, 
response_select_all_result = list(response_select_all)
```

### Select Count(*)

Count the number of documents in the collection
```python
items.estimated_document_count()
```

### Select Use Condition 

Select documents with condition (use date as example)
```python
from datetime import  datetime
response_select_all = items.find(
    {
        'update_date': {
            # '$gte': datetime(2021, 1, 1, 0, 0)
            # '$eq': datetime(2021, 1, 1, 0, 0)
            '$lte': datetime(2021, 1, 1, 0, 0)
        }
    }
)
response_select_all_result = list(response_select_all)
response_select_all_result
```

```python
from datetime import  datetime
response_select_all = items.find(
    {
        'update_date': {
            # '$eq': tw_tz.localize(datetime(2021, 1, 1, 8, 0))
            # '$gte': tw_tz.localize(datetime(2021, 1, 1, 8, 0))
            '$lte': tw_tz.localize(datetime(2021, 1, 1, 8, 0))
        }
    }
)
response_select_all_result = list(response_select_all)
response_select_all_result
```


```python
from bson.codec_options import CodecOptions
aware_times = items.with_options(codec_options=CodecOptions(
    tz_aware=True,
    tzinfo=pytz.timezone('Asia/Taipei'))
)
```

```python
from datetime import  datetime
response_select_all = aware_times.find(
    {
        'update_date': {
            # '$gte': datetime(2021, 1, 1, 0, 0)
            # '$eq': datetime(2021, 1, 1, 0, 0)
            '$lte': datetime(2021, 1, 1, 0, 0)
        }
    }
)
response_select_all_result = list(response_select_all)
response_select_all_result
```

```python
from datetime import  datetime
response_select_all = aware_times.find(
    {
        'update_date': {
            # '$eq': tw_tz.localize(datetime(2021, 1, 1, 8, 0))
            # '$gte': tw_tz.localize(datetime(2021, 1, 1, 8, 0))
            '$lte': tw_tz.localize(datetime(2021, 1, 1, 8, 0))
        }
    }
)
response_select_all_result = list(response_select_all)
response_select_all_result
```

## Delete
Delete documents from the collection

### Delete All Documents

```python
items.delete_many({})
```

### Delete Use Condition 

Delete documents with condition
```python
```


