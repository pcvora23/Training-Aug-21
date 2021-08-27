-- Created Database
    create database Car_sales

-- Created Table

-- car (carid, vin, make, model, year, mileage, askprice, invoiceprice)
    create table car
    (
    carid int primary key not null identity(1,1),
    vin int not null,
    make varchar(20) not null,
    model varchar(20) not null,
    year int not null,
    mileage float not null,
    askprice money,
    invoiceprice money not null
    )

-- dealership (dealershipid, name, address, city, state)
    create table dealership
    (
    dealershipid int not null primary key identity(1,1),
    name varchar(30) not null,
    address varchar(128) not null,
    city varchar(16) not null,
    state varchar(16) not null, 
    )

-- salesperson (salespersonid, name)
    create table salesperson
    (
    salespersonid int primary key not null identity(1,1),
    name varchar(32) not null
    )

-- customer (customerid, name, address, city, state)
    create table customer
    (
    customerid int primary key not null identity(1,1),
    name varchar(32) not null,
    address varchar(128) not  null,
    city varchar(16) not null,
    state varchar(16) not null
    )

-- reportsto (reportstoid, salespersonid, managingsalespersonid)
    create table reportsto
    (
    reportstoid int primary key not null identity(1,1),
    salespersonid int foreign key references salesperson(salespersonid),
    managingsalespersonid int not null
    )

-- worksat (worksatid, salespersonid, dealershipid, monthworked, basesalaryformonth)
    create table worksat
    (
    worksatid int primary key not null identity(1,1),
    salespersonid int foreign key references salesperson(salespersonid),
    dealershipid int foreign key references dealership (dealershipid),
    monthworked int not null,
    basesalaryformonth money not null
    )   

-- inventory (inventoryid, vin, dealershipid) 
    create table inventory
    (
    inventoryid int primary key not null identity(1,1),
    vin int not null,
    dealershipid int foreign key references dealership (dealershipid)
    )

-- sale (saleid, vin, customerid, salespersonid, dealershipid, saleprice, saledate)
    create table sale
    (
    saleid int primary key not null identity(1,1),
    vin int not null,
    customerid int foreign key references customer (customerid),
    salespersonid int foreign key references salesperson (salespersonid),
    dealershipid int foreign key references dealership (dealershipid),
    saleprice money not null,
    saledate date not null,
    )

-- Inserting values
    -- inserted value using design of table from ssms only

