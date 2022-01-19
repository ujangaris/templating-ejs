### Template EJS

    ## Documentations : https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

## Step 1 - Setting Up the Project

    pada terminal :
        jika belum mempunyai folder:
        - mkdir ejs-demo
        - cd ejs-demo
        jika sudah berada di folder directory:
            memanggil file package.json:
                                        - npm init -y

            menginstall package yang diperlukan:
                                        - npm install express@4.17.1
                                        - npm install ejs@3.1.6

## Step 1 — Configuring with server.js

    install nodemon agar lebih mudah dalam menjalankan server: npm install --save-dev nodemon

    pada file package.json :
        "scripts": {
        "start": "nodemon server.js"
    },

    jalankan server : pada terminal ketikan npm start

## Step 2 — Creating the EJS Pages/index

    pertama buat folder views:
                        - mkdir views
    pertama buat folder pages didalam views:
                        - mkdir views/pages

    jalankan pada browser: http://localhost:3000/
