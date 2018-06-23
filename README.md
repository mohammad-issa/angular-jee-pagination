# AngularJeePagination
![alt text](./src/jeePagination.png)

# Configuration

A complete list of JeePagination parameters can be found in the table below.

| Name | Type | Input/Output | Parameter description |
| ---- | ---- | ------------ | --------------------- |
| `totalRecords` | Number | @Input | (required) The total number of items. |
| `perPage` | Number | @Input | (required) How many items per page (required). |
| `showBefore` | Number | @Input | (optional) How many page can i see before current page (2 By default). |
| `showAfter` | Number | @Input | (optional) How many page can i see after current page (3 By default). |
| `specificPage` | Boolean | @Input | (optional) Show or hide input box (true By default). |
| `controller` | Function($event) | @Output | (required) This function will call when the page change.it takes a 'pageNumber' as a parameter |


# Development

1. Download and install NodeJS so you can use NPM:
  https://nodejs.org/download/

2. From the Terminal, navigate to the project directory and run in the following order:
 ```npm install```
 ```ng serve```