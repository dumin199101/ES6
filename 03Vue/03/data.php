<?php
   $data = [
     ["id"=> 1, "title"=> '苹果', "price"=> 2, "num"=> 3],
     ["id"=> 2, "title"=> '香蕉', "price"=> 3, "num"=> 5],
     ["id"=> 3, "title"=> '橘子', "price"=> 4, "num"=> 2],
     ["id"=> 4, "title"=> '菠萝', "price"=> 7, "num"=> 1],
   ];
   echo json_encode($data);