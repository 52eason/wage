/*
 * DB handler
 * Creator: Eason (52eason@gmail.com)
 * Version: v0.0.1, new initial
 * Description:
 * This file include all DB access necessary functions, please refer to 
 * http://docs.phonegap.com/en/2.0.0/cordova_storage_storage.md.html
 * for detail of phonegap storage function.
 */

var db;

function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("success!");
}

//var db = window.openDatabase("Database", "1.0", "Demo", 200000);
//db.transaction(populateDB, errorCB, successCB);