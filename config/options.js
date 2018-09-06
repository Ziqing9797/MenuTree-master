var options =
    {
    "code":100,
    "msg":"操作成功",
    "extend":{
        "children":[
            {
            "id":"1",
             "text":"主菜单",
            'icons':"fa fa-bars",
             "children":[
                {
                "id":"2",
                 "text":"权限系统",
                    'icons':"fa fa-android",
                 "children":[
                    {
                        "id":"4",
                        "text":"用户管理",
                        'icons':"fa fa-user",
                        "children":[],
                        "parentId":"2",
                        "url":"userManage.html"
                        },
                    {
                        "id":"5",
                        "text":"角色管理",
                        'icons': "fa fa-users",
                        "children":[],
                        "parentId":"2",
                        "url":"actorManage.html"
                    },
                    {
                        "id":"6",
                        "text":"权限管理",
                        'icons':"fa fa-users",
                        "children":[
                            {
                                "id":"7",
                                "text":"权限增加",
                                "children":[],
                                "parentId":"6"
                            },
                            {
                                "id":"8",
                                "text":"权限删除",
                                "children":[],
                                "parentId":"6"
                            }
                            ]
                        ,"parentId":"2"
                    }
                    ]
                    ,"parentId":"1"
                },
                {
                  "id":"3",
                  "text":"内容管理",
                    'icons':"fa fa-tasks",
                    "children":[
                      {   "id":"9",
                          "text":"轮播图管理",
                          "children":[],
                          "parentId":"3"
                      },
                      {   "id":"10",
                          "text":"商品管理",
                          "children":[],
                          "parentId":"3"
                      }
                        ],
                    "parentId":"1"
                },
                 {
                     "id":"11",
                     "text":"权限系统",
                     'icons':"fa fa-android",
                     "children":[
                         {
                             "id":"12",
                             "text":"用户管理",
                             'icons':"fa fa-user",
                             "children":[],
                             "parentId":"2",
                             "url":"userManage.html"
                         },
                         {
                             "id":"13",
                             "text":"角色管理",
                             'icons': "fa fa-users",
                             "children":[],
                             "parentId":"2"
                         },
                         {
                             "id":"14",
                             "text":"权限管理",
                             'icons':"fa fa-users",
                             "children":[
                                 {
                                     "id":"7",
                                     "text":"权限增加",
                                     'icons':"fa fa-user",
                                     "children":[],
                                     "parentId":"6"
                                 },
                                 {
                                     "id":"8",
                                     "text":"权限删除",
                                     'icons': "fa fa-users",
                                     "children":[],
                                     "parentId":"6"
                                 }
                             ]
                             ,"parentId":"2"
                         }
                     ]
                     ,"parentId":"1"
                 }
             ],
                "parentId":"1"
            }
                ]
            }
    };
