# Item Management


This is basic crud app, read this message for the installation step.



---

**Requirement**

```
1. Node Js Version >= 18.17 (include with NPM)
2. mysql
3. git
```

**Installation nodejs, mysql and git**
```
sudo apt install nodejs mysql-server git
```

**Preparing Database**

**1. Create Database User**
```
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

**2. Allow user to accress database**
```
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
FLUSH PRIVILEGES;
```
**Preparing Nodejs**

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

**Installation**
___
**1. First you need to clone this repository**
```
git clone https://github.com/MeidinaFiqri/basic_item_management.git
```
---
**2. Go to project folder**
```
cd ../../basic_item_management
```
---
**3. Install the package ( in this project you need to install 2 package in main directory and **item_management** directory)**
```
npm i
```
---
**4. You need to import the sql file in the directory to mysql**
```
mysql -u [username] -p item_management < database.sql
```
---
**5. Go to backend directory and run the program**
```
node index
```
---
**6. Go to the item_management and run the project as a development**
```
npm run dev
```
---
**7. after the code is work 100 % build the clean code**
```
npm run build
```
---
**8. after finsih start the production**
```
npm run start
```
