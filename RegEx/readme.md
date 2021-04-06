# Email validation

###  
 ```javascript
 //////////////username/////////@///host/////////./// domain  . //// optional domain
 var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;


 ---------------username------------------------@host--------.--domain
 var regex = /^([a-z0-9]+)([\.]{1})?([a-z0-9]+)?@([a-z0-9]+)\.{1}([a-z]{2,8})$/;

```

 ```javascript
    /^$/ 
  // exact match between ^ and $
 ```



 ```javascript
\.
means dot
 ```

 ```javascript
.
dot means any letters /a.b/
 ```

  ```javascript
+ 
atleast one or more than one
 ```

   ```javascript
{}
fix length, or range {2,8}
```
  ```javascript
?
means optional
```



