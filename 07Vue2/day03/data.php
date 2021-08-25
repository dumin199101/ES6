<?php
   header('Content-Type: text/html;charset=utf-8');
   header('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求
   header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
   header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies
   header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin'); // 设置允许自定义请求头的字段

   $data = [
     ["id"=> 1, "title"=> '苹果1', "price"=> 2, "num"=> 3],
     ["id"=> 2, "title"=> '香蕉2', "price"=> 3, "num"=> 5],
     ["id"=> 3, "title"=> '橘子3', "price"=> 4, "num"=> 2],
     ["id"=> 4, "title"=> '菠萝4', "price"=> 7, "num"=> 1],
   ];
   echo json_encode($data);