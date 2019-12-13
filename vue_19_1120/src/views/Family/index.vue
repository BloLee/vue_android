<template>
   <div class="wrap">
       <div style="{display:flex;}">
        <div id="ResultStr" :style="{ width:max_width+'px',height:max_height+'px' }" v-if="ResultStr" v-html="ResultStr"></div>
       </div>   
   </div>
</template>
<style lang="scss">
.wrap{ width: 100vh; min-height: 100vh; background:#000; overflow: auto; }
#ResultStr{
    border:0;
    width:100%; 
    justify-content:flex-start;
    align-items:flex-start;
    align-content:flex-start;
    align-self:center;
    position: relative;
    
}
.minHei{ width: 100%;height: 100%;}
</style>
<script>  
export default {
  name:'home',
  data(){
    return{
      chartItemPadding:8, //每个成员与成员之间的宽度的一半
      chartItemWidth:40, //每个成员的宽度（注意：包含Padding的间距）
      chartItemHeight:80, //每个成员的宽度（注意：包含Padding的间距）
      chartAreaWidth:document.documentElement.clientWidth - 40,//layout.autoWidth(40),
      chartAreaHeight:document.documentElement.clientHeight - 180, //layout.autoWidth(180),
      data:{
        "FamilyId":12466,
        "Name":"余某某",
        "TotalNumber":28,
        "ManCount":18,
        "WomanCount":10,
        "pfamilyMemberListGroup":[
            [
                {
                    "ID":66988,
                    "PrevId":0,
                    "MotherId":0,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66988,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"123123",
                        "IdCard":null,
                        "PrevId":0,
                        "MotherId":0,
                        "Sex":1,
                        "IsMarried":1,
                        "Birth":"1993-12-11",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":1,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-11 17:11:39",
                        "UpdateTime":"2019-12-11 17:11:39",
                        "Txid":null,
                        "PassDate":"2019-12-11",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-11 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":50003,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":1
                }
            ],
            [
                {
                    "ID":66960,
                    "PrevId":66988,
                    "MotherId":0,
                    "MarryId":66966,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66960,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余爷爷",
                        "IdCard":null,
                        "PrevId":66988,
                        "MotherId":0,
                        "Sex":1,
                        "IsMarried":1,
                        "Birth":"2019-12-09",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":66966,
                        "DivorceId":null,
                        "CreateTime":"2019-12-09 14:36:53",
                        "UpdateTime":"2019-12-11 17:11:39",
                        "Txid":null,
                        "PassDate":"2019-12-09",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-09 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":50002,
                        "Image":"ee0f45032b9f47cc9d5ce26cfc7abc5e.jpg",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":{
                        "ID":66966,
                        "PrevId":0,
                        "MotherId":0,
                        "MarryId":66960,
                        "IsAdd":8,
                        "Url":"http://192.168.20.118:6120/img/1/",
                        "FamilyMember":{
                            "ID":66966,
                            "UserID":0,
                            "FamilyId":0,
                            "MotherFamilyId":0,
                            "MarryFamilyId":12466,
                            "Name":"88858",
                            "IdCard":null,
                            "PrevId":0,
                            "MotherId":0,
                            "Sex":2,
                            "IsMarried":1,
                            "Birth":"1966-12-10",
                            "HomeAddress":null,
                            "Nation":null,
                            "Introduction":null,
                            "IsPass":0,
                            "MarriedId":66960,
                            "DivorceId":null,
                            "CreateTime":"2019-12-10 16:35:48",
                            "UpdateTime":"2019-12-10 16:35:48",
                            "Txid":null,
                            "PassDate":"2019-12-10",
                            "Phone":"",
                            "MarriedProve":"http://192.168.20.118:6120/img/1/8d593ed2d8954c45af7a9d7b55e0745d.jpg",
                            "MarriedDate":"1986-12-10 00:00:00",
                            "MemberState":1,
                            "AddType":0,
                            "MemberLevle":50002,
                            "Image":"",
                            "IsAdmin":0,
                            "IsTransfer":0,
                            "BelFamilyId":12466,
                            "MergeMemberID":0
                        },
                        "MarryObject":null,
                        "DivorcePersonnelList":null,
                        "ChildList":0
                    },
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":3
                }
            ],
            [
                {
                    "ID":57813,
                    "PrevId":66960,
                    "MotherId":66966,
                    "MarryId":57912,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":57813,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余爸爸",
                        "IdCard":"431223198825262220",
                        "PrevId":66960,
                        "MotherId":66966,
                        "Sex":1,
                        "IsMarried":1,
                        "Birth":"1986-11-07",
                        "HomeAddress":"怀化",
                        "Nation":"汉族",
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":57912,
                        "DivorceId":null,
                        "CreateTime":"2019-11-07 11:58:48",
                        "UpdateTime":"2019-12-10 16:35:48",
                        "Txid":null,
                        "PassDate":null,
                        "Phone":"15611111111",
                        "MarriedProve":"",
                        "MarriedDate":"2019-11-07 00:00:00",
                        "MemberState":3,
                        "AddType":0,
                        "MemberLevle":50001,
                        "Image":"9e7587f4ef8c467fadee0619a18607be.jpg",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":10
                },
                {
                    "ID":66989,
                    "PrevId":66960,
                    "MotherId":66966,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66989,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"1212",
                        "IdCard":null,
                        "PrevId":66960,
                        "MotherId":66966,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-12-11",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-11 17:14:04",
                        "UpdateTime":"2019-12-11 17:14:04",
                        "Txid":null,
                        "PassDate":"2019-12-11",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-11 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":50001,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":66998,
                    "PrevId":66960,
                    "MotherId":66966,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66998,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"5656",
                        "IdCard":null,
                        "PrevId":66960,
                        "MotherId":66966,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-12-11",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-11 18:42:24",
                        "UpdateTime":"2019-12-11 18:42:24",
                        "Txid":null,
                        "PassDate":"2019-12-11",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-11 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":50001,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                }
            ],
            [
                {
                    "ID":57812,
                    "PrevId":57813,
                    "MotherId":57912,
                    "MarryId":66957,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":57812,
                        "UserID":27770,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余某某",
                        "IdCard":"431223199902082222",
                        "PrevId":57813,
                        "MotherId":57912,
                        "Sex":1,
                        "IsMarried":1,
                        "Birth":"1999-02-08",
                        "HomeAddress":"怀化",
                        "Nation":"汉族",
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":66957,
                        "DivorceId":null,
                        "CreateTime":"2019-11-07 11:58:05",
                        "UpdateTime":"2019-12-07 16:31:20",
                        "Txid":null,
                        "PassDate":null,
                        "Phone":null,
                        "MarriedProve":null,
                        "MarriedDate":null,
                        "MemberState":3,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":"4adac56d107842a3bd7ec69436144a24.jpg",
                        "IsAdmin":1,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":{
                        "ID":66957,
                        "PrevId":0,
                        "MotherId":0,
                        "MarryId":57812,
                        "IsAdd":8,
                        "Url":"http://192.168.20.118:6120/img/1/",
                        "FamilyMember":{
                            "ID":66957,
                            "UserID":0,
                            "FamilyId":0,
                            "MotherFamilyId":0,
                            "MarryFamilyId":12466,
                            "Name":"585",
                            "IdCard":null,
                            "PrevId":0,
                            "MotherId":0,
                            "Sex":2,
                            "IsMarried":1,
                            "Birth":"1996-12-07",
                            "HomeAddress":null,
                            "Nation":null,
                            "Introduction":null,
                            "IsPass":0,
                            "MarriedId":57812,
                            "DivorceId":null,
                            "CreateTime":"2019-12-07 16:31:20",
                            "UpdateTime":"2019-12-07 16:31:20",
                            "Txid":null,
                            "PassDate":"2019-12-07",
                            "Phone":"",
                            "MarriedProve":"http://192.168.20.118:6120/img/1/6f0e028b1db04a6d921f39f1317bfd77.jpg",
                            "MarriedDate":"2019-12-07 00:00:00",
                            "MemberState":1,
                            "AddType":0,
                            "MemberLevle":50000,
                            "Image":"106321b93afe4784bf8a990e90206555.jpg",
                            "IsAdmin":0,
                            "IsTransfer":0,
                            "BelFamilyId":12466,
                            "MergeMemberID":0
                        },
                        "MarryObject":null,
                        "DivorcePersonnelList":null,
                        "ChildList":0
                    },
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":4
                },
                {
                    "ID":57814,
                    "PrevId":57813,
                    "MotherId":0,
                    "MarryId":66959,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":57814,
                        "UserID":27774,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余小明",
                        "IdCard":"431223199902082223",
                        "PrevId":57813,
                        "MotherId":0,
                        "Sex":1,
                        "IsMarried":1,
                        "Birth":"2019-11-07",
                        "HomeAddress":"怀化",
                        "Nation":"汉族",
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":66959,
                        "DivorceId":null,
                        "CreateTime":"2019-11-07 12:00:53",
                        "UpdateTime":"2019-12-09 14:27:21",
                        "Txid":null,
                        "PassDate":null,
                        "Phone":null,
                        "MarriedProve":null,
                        "MarriedDate":null,
                        "MemberState":3,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":null,
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":{
                        "ID":66959,
                        "PrevId":0,
                        "MotherId":0,
                        "MarryId":57814,
                        "IsAdd":8,
                        "Url":"http://192.168.20.118:6120/img/1/",
                        "FamilyMember":{
                            "ID":66959,
                            "UserID":0,
                            "FamilyId":0,
                            "MotherFamilyId":0,
                            "MarryFamilyId":12466,
                            "Name":"小明老婆",
                            "IdCard":null,
                            "PrevId":0,
                            "MotherId":0,
                            "Sex":2,
                            "IsMarried":1,
                            "Birth":"1971-12-09",
                            "HomeAddress":null,
                            "Nation":null,
                            "Introduction":null,
                            "IsPass":0,
                            "MarriedId":57814,
                            "DivorceId":null,
                            "CreateTime":"2019-12-09 14:27:21",
                            "UpdateTime":"2019-12-09 14:27:21",
                            "Txid":null,
                            "PassDate":"2019-12-09",
                            "Phone":"",
                            "MarriedProve":"http://192.168.20.118:6120/img/1/d64c830696ba4953accb5726c8b86093.jpg",
                            "MarriedDate":"1995-12-09 00:00:00",
                            "MemberState":1,
                            "AddType":0,
                            "MemberLevle":50000,
                            "Image":"",
                            "IsAdmin":0,
                            "IsTransfer":0,
                            "BelFamilyId":12466,
                            "MergeMemberID":0
                        },
                        "MarryObject":null,
                        "DivorcePersonnelList":null,
                        "ChildList":0
                    },
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":1
                },
                {
                    "ID":57891,
                    "PrevId":57813,
                    "MotherId":0,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":57891,
                        "UserID":27790,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余小宁",
                        "IdCard":"431223199902082224",
                        "PrevId":57813,
                        "MotherId":0,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-11-07",
                        "HomeAddress":"怀化",
                        "Nation":"汉族",
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-11-07 16:30:47",
                        "UpdateTime":"2019-11-07 16:30:47",
                        "Txid":null,
                        "PassDate":null,
                        "Phone":null,
                        "MarriedProve":null,
                        "MarriedDate":null,
                        "MemberState":3,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":null,
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":57895,
                    "PrevId":57813,
                    "MotherId":0,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":57895,
                        "UserID":27793,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余念念",
                        "IdCard":"431223199902082226",
                        "PrevId":57813,
                        "MotherId":0,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-11-07",
                        "HomeAddress":"怀化",
                        "Nation":"汉族",
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-11-07 16:48:01",
                        "UpdateTime":"2019-11-07 16:48:01",
                        "Txid":null,
                        "PassDate":null,
                        "Phone":null,
                        "MarriedProve":null,
                        "MarriedDate":null,
                        "MemberState":3,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":null,
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":58121,
                    "PrevId":57813,
                    "MotherId":57912,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":58121,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余弟弟",
                        "IdCard":"431222199902082226",
                        "PrevId":57813,
                        "MotherId":57912,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-11-08",
                        "HomeAddress":"怀化",
                        "Nation":"汉族",
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-11-08 11:55:32",
                        "UpdateTime":"2019-11-08 11:59:07",
                        "Txid":null,
                        "PassDate":null,
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-11-08 00:00:00",
                        "MemberState":3,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":58124,
                    "PrevId":57813,
                    "MotherId":0,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":58124,
                        "UserID":27837,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余是个",
                        "IdCard":"431223199902085555",
                        "PrevId":57813,
                        "MotherId":0,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-11-08",
                        "HomeAddress":"怀化",
                        "Nation":"汉族",
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-11-08 12:00:20",
                        "UpdateTime":"2019-11-08 12:00:20",
                        "Txid":null,
                        "PassDate":null,
                        "Phone":null,
                        "MarriedProve":null,
                        "MarriedDate":null,
                        "MemberState":3,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":null,
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":58940,
                    "PrevId":57813,
                    "MotherId":57912,
                    "MarryId":66964,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":58940,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余",
                        "IdCard":null,
                        "PrevId":57813,
                        "MotherId":57912,
                        "Sex":1,
                        "IsMarried":1,
                        "Birth":"2012-11-08",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":66964,
                        "DivorceId":null,
                        "CreateTime":"2019-11-08 17:10:08",
                        "UpdateTime":"2019-12-10 10:26:49",
                        "Txid":null,
                        "PassDate":"2019-11-08",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-11-08 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":{
                        "ID":66964,
                        "PrevId":0,
                        "MotherId":0,
                        "MarryId":58940,
                        "IsAdd":8,
                        "Url":"http://192.168.20.118:6120/img/1/",
                        "FamilyMember":{
                            "ID":66964,
                            "UserID":0,
                            "FamilyId":0,
                            "MotherFamilyId":0,
                            "MarryFamilyId":12466,
                            "Name":"peio",
                            "IdCard":null,
                            "PrevId":0,
                            "MotherId":0,
                            "Sex":2,
                            "IsMarried":1,
                            "Birth":"2005-12-10",
                            "HomeAddress":null,
                            "Nation":null,
                            "Introduction":null,
                            "IsPass":0,
                            "MarriedId":58940,
                            "DivorceId":null,
                            "CreateTime":"2019-12-10 10:26:49",
                            "UpdateTime":"2019-12-10 10:26:49",
                            "Txid":null,
                            "PassDate":"2019-12-10",
                            "Phone":"",
                            "MarriedProve":"http://192.168.20.118:6120/img/1/e0b46297b46645a7ae957d7cf1219066.jpg",
                            "MarriedDate":"2019-12-10 00:00:00",
                            "MemberState":1,
                            "AddType":0,
                            "MemberLevle":50000,
                            "Image":"",
                            "IsAdmin":0,
                            "IsTransfer":0,
                            "BelFamilyId":12466,
                            "MergeMemberID":0
                        },
                        "MarryObject":null,
                        "DivorcePersonnelList":null,
                        "ChildList":0
                    },
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":1
                },
                {
                    "ID":66997,
                    "PrevId":57813,
                    "MotherId":0,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66997,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"55",
                        "IdCard":null,
                        "PrevId":57813,
                        "MotherId":0,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-12-11",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-11 18:41:43",
                        "UpdateTime":"2019-12-11 18:41:43",
                        "Txid":null,
                        "PassDate":"2019-12-11",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-11 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":66961,
                    "PrevId":57813,
                    "MotherId":57912,
                    "MarryId":0,
                    "IsAdd":-1,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66961,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"余秘密",
                        "IdCard":null,
                        "PrevId":57813,
                        "MotherId":57912,
                        "Sex":2,
                        "IsMarried":0,
                        "Birth":"2019-12-09",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-09 15:42:27",
                        "UpdateTime":"2019-12-09 15:42:27",
                        "Txid":null,
                        "PassDate":"2019-12-09",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-09 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":66996,
                    "PrevId":57813,
                    "MotherId":0,
                    "MarryId":0,
                    "IsAdd":-1,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66996,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"55",
                        "IdCard":null,
                        "PrevId":57813,
                        "MotherId":0,
                        "Sex":2,
                        "IsMarried":0,
                        "Birth":"2019-12-11",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-11 18:41:27",
                        "UpdateTime":"2019-12-11 18:41:27",
                        "Txid":null,
                        "PassDate":"2019-12-11",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-11 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":50000,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                }
            ],
            [
                {
                    "ID":66958,
                    "PrevId":57812,
                    "MotherId":66957,
                    "MarryId":66982,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66958,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"33",
                        "IdCard":null,
                        "PrevId":57812,
                        "MotherId":66957,
                        "Sex":1,
                        "IsMarried":1,
                        "Birth":"2019-12-07",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":66982,
                        "DivorceId":null,
                        "CreateTime":"2019-12-07 16:31:38",
                        "UpdateTime":"2019-12-11 15:35:59",
                        "Txid":null,
                        "PassDate":"2019-12-07",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-07 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":49999,
                        "Image":"71d37994eac64ea6a3cf26586befeb55.jpg",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":{
                        "ID":66982,
                        "PrevId":0,
                        "MotherId":0,
                        "MarryId":66958,
                        "IsAdd":8,
                        "Url":"http://192.168.20.118:6120/img/1/",
                        "FamilyMember":{
                            "ID":66982,
                            "UserID":0,
                            "FamilyId":0,
                            "MotherFamilyId":0,
                            "MarryFamilyId":12466,
                            "Name":"有一条",
                            "IdCard":null,
                            "PrevId":0,
                            "MotherId":0,
                            "Sex":2,
                            "IsMarried":1,
                            "Birth":"2010-12-11",
                            "HomeAddress":null,
                            "Nation":null,
                            "Introduction":null,
                            "IsPass":0,
                            "MarriedId":66958,
                            "DivorceId":null,
                            "CreateTime":"2019-12-11 15:35:59",
                            "UpdateTime":"2019-12-11 15:35:59",
                            "Txid":null,
                            "PassDate":"2019-12-11",
                            "Phone":"",
                            "MarriedProve":"http://192.168.20.118:6120/img/1/c404e5ed259f495c9a40902c6e26ead3.jpg",
                            "MarriedDate":"2019-12-11 00:00:00",
                            "MemberState":1,
                            "AddType":0,
                            "MemberLevle":49999,
                            "Image":"",
                            "IsAdmin":0,
                            "IsTransfer":0,
                            "BelFamilyId":12466,
                            "MergeMemberID":0
                        },
                        "MarryObject":null,
                        "DivorcePersonnelList":null,
                        "ChildList":0
                    },
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":1
                },
                {
                    "ID":66963,
                    "PrevId":57812,
                    "MotherId":66957,
                    "MarryId":0,
                    "IsAdd":-1,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66963,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"密码",
                        "IdCard":null,
                        "PrevId":57812,
                        "MotherId":66957,
                        "Sex":2,
                        "IsMarried":0,
                        "Birth":"2019-12-09",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-09 17:16:13",
                        "UpdateTime":"2019-12-09 17:16:13",
                        "Txid":null,
                        "PassDate":"2019-12-09",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-09 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":49999,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":66984,
                    "PrevId":57812,
                    "MotherId":66957,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66984,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"45",
                        "IdCard":null,
                        "PrevId":57812,
                        "MotherId":66957,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-12-11",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-11 16:47:45",
                        "UpdateTime":"2019-12-11 16:47:45",
                        "Txid":null,
                        "PassDate":"2019-12-11",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-11 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":49999,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":66986,
                    "PrevId":57812,
                    "MotherId":66957,
                    "MarryId":0,
                    "IsAdd":-1,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66986,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"56556",
                        "IdCard":null,
                        "PrevId":57812,
                        "MotherId":66957,
                        "Sex":2,
                        "IsMarried":0,
                        "Birth":"2019-12-11",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-11 17:10:14",
                        "UpdateTime":"2019-12-11 17:10:14",
                        "Txid":null,
                        "PassDate":"2019-12-11",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-11 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":49999,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":66962,
                    "PrevId":57814,
                    "MotherId":66959,
                    "MarryId":66985,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66962,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"555555",
                        "IdCard":null,
                        "PrevId":57814,
                        "MotherId":66959,
                        "Sex":1,
                        "IsMarried":1,
                        "Birth":"2019-12-09",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":66985,
                        "DivorceId":null,
                        "CreateTime":"2019-12-09 17:15:50",
                        "UpdateTime":"2019-12-11 16:55:43",
                        "Txid":null,
                        "PassDate":"2019-12-09",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-09 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":49999,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":{
                        "ID":66985,
                        "PrevId":0,
                        "MotherId":0,
                        "MarryId":66962,
                        "IsAdd":8,
                        "Url":"http://192.168.20.118:6120/img/1/",
                        "FamilyMember":{
                            "ID":66985,
                            "UserID":0,
                            "FamilyId":0,
                            "MotherFamilyId":0,
                            "MarryFamilyId":12466,
                            "Name":"444",
                            "IdCard":null,
                            "PrevId":0,
                            "MotherId":0,
                            "Sex":2,
                            "IsMarried":1,
                            "Birth":"2011-12-11",
                            "HomeAddress":null,
                            "Nation":null,
                            "Introduction":null,
                            "IsPass":0,
                            "MarriedId":66962,
                            "DivorceId":null,
                            "CreateTime":"2019-12-11 16:55:43",
                            "UpdateTime":"2019-12-11 16:55:43",
                            "Txid":null,
                            "PassDate":"2019-12-11",
                            "Phone":"",
                            "MarriedProve":"http://192.168.20.118:6120/img/1/9fe6e41abc604c91a67ef2aec331d169.jpg",
                            "MarriedDate":"2019-12-11 00:00:00",
                            "MemberState":1,
                            "AddType":0,
                            "MemberLevle":49999,
                            "Image":"",
                            "IsAdmin":0,
                            "IsTransfer":0,
                            "BelFamilyId":12466,
                            "MergeMemberID":0
                        },
                        "MarryObject":null,
                        "DivorcePersonnelList":null,
                        "ChildList":0
                    },
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                },
                {
                    "ID":66965,
                    "PrevId":58940,
                    "MotherId":66964,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66965,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"55",
                        "IdCard":null,
                        "PrevId":58940,
                        "MotherId":66964,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-12-10",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-10 10:27:02",
                        "UpdateTime":"2019-12-10 10:27:02",
                        "Txid":null,
                        "PassDate":"2019-12-10",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-10 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":49999,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                }
            ],
            [
                {
                    "ID":66987,
                    "PrevId":66958,
                    "MotherId":66982,
                    "MarryId":0,
                    "IsAdd":0,
                    "Url":"http://192.168.20.118:6120/img/1/",
                    "FamilyMember":{
                        "ID":66987,
                        "UserID":0,
                        "FamilyId":12466,
                        "MotherFamilyId":0,
                        "MarryFamilyId":0,
                        "Name":"253",
                        "IdCard":null,
                        "PrevId":66958,
                        "MotherId":66982,
                        "Sex":1,
                        "IsMarried":0,
                        "Birth":"2019-12-11",
                        "HomeAddress":null,
                        "Nation":null,
                        "Introduction":null,
                        "IsPass":0,
                        "MarriedId":0,
                        "DivorceId":null,
                        "CreateTime":"2019-12-11 17:10:54",
                        "UpdateTime":"2019-12-11 17:10:54",
                        "Txid":null,
                        "PassDate":"2019-12-11",
                        "Phone":"",
                        "MarriedProve":"",
                        "MarriedDate":"2019-12-11 00:00:00",
                        "MemberState":1,
                        "AddType":0,
                        "MemberLevle":49998,
                        "Image":"",
                        "IsAdmin":0,
                        "IsTransfer":0,
                        "BelFamilyId":12466,
                        "MergeMemberID":0
                    },
                    "MarryObject":null,
                    "DivorcePersonnelList":[

                    ],
                    "ChildList":0
                }
            ]
        ]
      },
      chartData:null, //图表的数据
      ResultStr:'',
      max_width:0,
      max_height:0,
      image:"../../assets/logo.png",
      FmidValue:12466,
    }
  },  
  //通过计算属性读取 state 数据
  // computed:{
  //   intheaters(){
  //     return this.$store.state.intheaters;
  //   }
  // }, 
  created(){
    //先整理图表数据
    this.redrawGenealogy(this.data)
  },
  methods:{
    /**
     * 整理图表的数据
     * @param genealogyData 整理后的图表数据
    */
    redrawGenealogy(genealogyData){
      // console.log(genealogyData)
      //如果不存在返回 null
      if( !genealogyData ){
        return null;
      }
      let ArrangeGenealogyData = []; //整理后的数据
        let maxWidth = 0 ,
            maxIndex = 0;
      //获取图表的宽度与高度  判断 pfamilyMemberListGroup 数据列表是否存在
      if( genealogyData.pfamilyMemberListGroup && genealogyData.pfamilyMemberListGroup.length > 0 ){
        //进行第一次的循环，获取整个容器应该绘制的大小 ( 从底部往上面进行计算 )
        for( let i = genealogyData.pfamilyMemberListGroup.length - 1 , s = 0; i >= 0;i--,s++ ){
          let EachLeveObj = {
              familyLen:0,//当前这个辈分下，有几个家庭
              levelFamilyArray:[],//每个家庭的父级id
              levelFamilyTotal:[], //这将是一个JSON
              levalNeedWidth:0//整个层级正常所需要占用的宽度
          }; //定义每个层级的信息
          let EachLevelData = genealogyData.pfamilyMemberListGroup[i]; //每个层级的数据
          if( EachLevelData && EachLevelData.length > 0 ){
            let NextChildFamilyItem = null;
            if(ArrangeGenealogyData.length>0){
              NextChildFamilyItem = ArrangeGenealogyData[ArrangeGenealogyData.length-1]; //当前层的上一层的，基本信息
            }
            //是否为最后一层，如果是最后一层，直接计算
            for(let j = 0 ; j < EachLevelData.length ; j++){
                let MemberItem = EachLevelData[j]; //当前节点的基本信息
                let FmIndex = 0;
                if(EachLeveObj.levelFamilyArray.indexOf(MemberItem.PrevId) < 0){
                    EachLeveObj.levelFamilyArray.push(MemberItem.PrevId);
                    EachLeveObj.familyLen++; //家庭的数量+1
                    FmIndex = EachLeveObj.levelFamilyArray.length-1; //当前用户是属于哪个家庭的
                    let FmObj = {
                        MemberArray: [],
                        MemberWidthArray: [], //当前节点的占用宽度（包含子节点）
                        MemberRealyWidthArray:[],//当前节点实际占用的宽度
                        MemberIDArray:[], //所有用户的ID，用于后期进行人员的索引匹配
                        TotalWidth:0
                    };
                    EachLeveObj.levelFamilyTotal.push(FmObj);
                }else{
                    FmIndex = EachLeveObj.levelFamilyArray.indexOf(MemberItem.PrevId); //当前用户是属于哪个家庭的
                }
                
                EachLeveObj.levelFamilyTotal[FmIndex].MemberArray.push(MemberItem);  //把当前的层级的人，按照对应的家庭进行一一分类
                EachLeveObj.levelFamilyTotal[FmIndex].MemberIDArray.push(MemberItem.ID); //存储当前家庭的人员ID
                
                //console.log(NextChildFamilyItem);
                // 计算每个节点的宽度
                if(NextChildFamilyItem && NextChildFamilyItem.levelFamilyArray.indexOf(MemberItem.ID) >= 0){
                    //存在子集
                    let ThisIndex = NextChildFamilyItem.levelFamilyArray.indexOf(MemberItem.ID);  //对应的子集的索引信息
                    if(MemberItem.MarryObject){
                        if(NextChildFamilyItem.levelFamilyTotal[ThisIndex].TotalWidth > (this.chartItemWidth * 2)){
                            EachLeveObj.levelFamilyTotal[FmIndex].TotalWidth += NextChildFamilyItem.levelFamilyTotal[ThisIndex].TotalWidth;   //累加得到当前家庭所占区域的总宽度
                            EachLeveObj.levelFamilyTotal[FmIndex].MemberWidthArray.push(Number(NextChildFamilyItem.levelFamilyTotal[ThisIndex].TotalWidth));  //当前节点的宽度
                        }else{
                            EachLeveObj.levelFamilyTotal[FmIndex].TotalWidth += Number(this.chartItemWidth * 2);   //累加得到当前家庭所占区域的总宽度
                            EachLeveObj.levelFamilyTotal[FmIndex].MemberWidthArray.push(Number(this.chartItemWidth* 2));
                        }
                        
                        EachLeveObj.levelFamilyTotal[FmIndex].MemberRealyWidthArray.push(Number(this.chartItemWidth * 2));
                    }else{
                        EachLeveObj.levelFamilyTotal[FmIndex].TotalWidth += NextChildFamilyItem.levelFamilyTotal[ThisIndex].TotalWidth;   //累加得到当前家庭所占区域的总宽度
                        EachLeveObj.levelFamilyTotal[FmIndex].MemberWidthArray.push(Number(NextChildFamilyItem.levelFamilyTotal[ThisIndex].TotalWidth));  //当前节点的宽度

                        EachLeveObj.levelFamilyTotal[FmIndex].MemberRealyWidthArray.push(Number(this.chartItemWidth));
                    }
                }else{
                    //最后一层
                    if(MemberItem.MarryObject){
                        //当前用户存在配偶，那么当前的宽度必须累加为2个Item
                        EachLeveObj.levelFamilyTotal[FmIndex].TotalWidth += Number(this.chartItemWidth * 2);   //累加得到当前家庭所占区域的总宽度
                        EachLeveObj.levelFamilyTotal[FmIndex].MemberWidthArray.push(Number(this.chartItemWidth * 2));


                        EachLeveObj.levelFamilyTotal[FmIndex].MemberRealyWidthArray.push(Number(this.chartItemWidth * 2));
                        
                    }else{
                        //用户不存在配偶且，不存在子节点的时候
                        //最后一个层级，不考虑子节点
                        EachLeveObj.levelFamilyTotal[FmIndex].TotalWidth += Number(this.chartItemWidth);  //累加得到当前家庭所占区域的总宽度
                        EachLeveObj.levelFamilyTotal[FmIndex].MemberWidthArray.push(Number(this.chartItemWidth));

                        EachLeveObj.levelFamilyTotal[FmIndex].MemberRealyWidthArray.push(Number(this.chartItemWidth));
                        
                    }
                }
            }

            for(var k = 0 ; k < EachLeveObj.levelFamilyTotal.length ; k++){
              EachLeveObj.levalNeedWidth += Number(EachLeveObj.levelFamilyTotal[k].TotalWidth);
            }
            if(EachLeveObj.levalNeedWidth > maxWidth){
              maxWidth = EachLeveObj.levalNeedWidth;
              maxIndex = i;
            }
          }
          //追加每个层级的信息
          ArrangeGenealogyData.push(EachLeveObj);
        }
      }
      //处理上一步整理的数据信息 设置图表的 宽高
      if(ArrangeGenealogyData.length>0){
        const _height = document.documentElement.clientHeight;   //获取当前屏幕的高度 
        const _width = document.documentElement.clientWidth;   //获取当前屏幕的高度 
        //layout.autoHeight(180)
        if((ArrangeGenealogyData.length * this.chartItemHeight) > ( _height - 180)){
          this.chartAreaHeight=(ArrangeGenealogyData.length*this.chartItemHeight) + this.chartItemHeight*2
            // this.setState({
            //     chartAreaHeight:(ArrangeGenealogyData.length*this.state.chartItemHeight) + this.state.chartItemHeight*2
            // })
        }else{
          this.chartAreaHeight=(ArrangeGenealogyData.length*this.chartItemHeight) + this.chartItemHeight*2
            // this.setState({
            //     chartAreaHeight:(ArrangeGenealogyData.length*this.state.chartItemHeight) + this.state.chartItemHeight*2
            // })
        }
        
        if(this.chartAreaWidth < maxWidth && (maxWidth + this.chartItemWidth*2)>( _width-30 )){
          this.chartAreaWidth=maxWidth + this.chartItemWidth*2
            // this.setState({
            //     chartAreaWidth:maxWidth + this.state.chartItemWidth*2
            // })
        }else{
          this.chartAreaWidth=maxWidth+ this.chartItemWidth*2
            //console.log(maxWidth);
            // this.setState({
            //     chartAreaWidth:maxWidth+ this.state.chartItemWidth*2
            // })
        }
      }
      ArrangeGenealogyData.reverse(); //倒序
    //   console.log(ArrangeGenealogyData)
      this.chartData = ArrangeGenealogyData;
      //绘制图表 
      this.renderLeavel(ArrangeGenealogyData)
    },
    /**
     * 绘制整个数据
    */
    renderLeavel(ChartData){
      let ResultStr = "",
          max_width = 0 ,
          max_height = 0 ,
          Init_index = 0;
      for(var i = 0 ; i < ChartData.length ; i++){
        if(ChartData[i].levalNeedWidth > max_width){
          max_width = ChartData[i].levalNeedWidth;
          this.max_width = ChartData[i].levalNeedWidth;
          Init_index = i ;
        }
      }
      this.max_height = max_height = ChartData.length * this.chartItemHeight;
    //   console.log(max_height)
      //拿到最大的宽度与高度之后
      for(var j = 0 ; j < ChartData.length; j++){
        //获取每一层
        let EachSeniority = this.renderEachSeniority(ChartData[j],max_width,j); 
        
        let strVar = "";
            strVar += "<div key='LeavelKey_"+j+"' style='height:"+this.chartItemHeight+"px;width:100%;position:relative'>\n";
            strVar += "     "+EachSeniority+"\n";
            strVar += "<\/div>\n"; 
        ResultStr += strVar; 
        // ResultStr.push(
        //     // style={[styles.EachLeavelStyle,{height:this.props.chartItemHeight}]}
        //     <div key={"LeavelKey_"+j} 
        //     style={'height:'+this.chartItemHeight+',width:"100%",position:"relative"'}>
        //         {EachSeniority}
        //     </div>
        // ); 
      } 
      this.ResultStr = ResultStr;
    }, 
    /**
     * 获取父级元素的id的起始位置
     * @param leavelindex 当前辈分层级
     * @param previd  父级单位id
     * @param selfWidth 自身家庭占位宽度
     */
    getParentFamilyStart(leavelindex,previd,selfWidth){
        // if(leavelindex==1) return {startx:0,itemwidth:this.props.chartItemWidth};
        let ChartDataValue = this.chartData[leavelindex-1]; //父级的数据源
        let StartX = 0,
            ItemWidth = this.chartItemWidth;//每个元素的宽度
        //console.log("leavelindex",ChartDataValue,previd);
        for(let j = 0 ; j < ChartDataValue.levelFamilyTotal.length; j++){
            let ParentFamilyObj = ChartDataValue.levelFamilyTotal[j]; //上一个层级的，所有家庭的对象集合
            if(typeof ParentFamilyObj.startX != "undefined"){

                //获取上一个层级的，家庭的成员id，是否存在当前子节点的元素
                if(ParentFamilyObj.MemberIDArray.indexOf(previd) >= 0){
                    //通过id索引找到对应的父集容器
                    StartX = ParentFamilyObj.startX; //家庭的起始位置
                    let StartIndex = ParentFamilyObj.MemberIDArray.indexOf(previd);

                    //遍历这个家庭当中，每个节点的起始位置；累计这个节点的占位宽度
                    for(let k = 0 ; k < StartIndex; k++){
                        StartX += Number(ChartDataValue.levelFamilyTotal[j].MemberWidthArray[k]);
                    }
                    ItemWidth = Number(ChartDataValue.levelFamilyTotal[j].MemberWidthArray[StartIndex]);
                }
            }
        }

        if(selfWidth<ItemWidth){
            StartX += (ItemWidth - selfWidth) /2;
        }

        return {
            startx:StartX, //父级元素的起始位置
            itemwidth:ItemWidth, //父级元素占位宽度
        };
    },
    /**
     *  绘制每一个辈分
     * @param SeniorityData 每一层的数据
     * @param max_width 整个容器的最大宽度
     * @param leavelIndex 层级的索引
     * @returns {Array}
    */
    renderEachSeniority(SeniorityData,max_width,leavelIndex){
    //   let Result =[];
        let Result ="";
        const _FamilyItem = "display:flex;position:absolute;flex-direction:row;height:100%;top:0;border:0;"
      if(SeniorityData&&SeniorityData.levelFamilyTotal&&SeniorityData.levelFamilyTotal.length>0){
          //计算每一层的家庭开始绘制的起始位置
          if(leavelIndex == 0 || max_width == SeniorityData.levalNeedWidth){
              //第一层，默认居中，最大的一层，默认起始位置为0
              let Leavel_startX = (max_width - SeniorityData.levalNeedWidth) / 2; //(最大宽度 - 每层所有家庭实际需要的宽度)/2
              
              //遍历当前层有多少个家庭单位
              for(let i = 0 ; i < SeniorityData.levelFamilyTotal.length ; i++){
                  //console.log(SeniorityData.levelFamilyTotal[i]);
                  let FamilyItem_Width = SeniorityData.levelFamilyTotal[i].TotalWidth;  //家庭单位
                  let FamilyItem = this.renderEachFamily(SeniorityData.levelFamilyTotal[i],{
                          startx:Leavel_startX,
                          itemwidth:FamilyItem_Width
                      },
                      leavelIndex
                  );  //家庭单位
  
                  SeniorityData.levelFamilyTotal[i].startX = Leavel_startX;
                  //获取每一个家庭
                //   console.log(FamilyItem )
                
                  let strVar = "";
                    strVar += "<div key='SenKey_"+i+"' style='"+_FamilyItem+";left:"+Leavel_startX+"px;width:"+FamilyItem_Width+"px;'>\n";
                    strVar += "   "+FamilyItem+"\n";
                    strVar += "<\/div>\n";
                    Result += strVar;
                //   Result.push(
                //     //   style={[styles.borderStyle,styles.FamilyItem,{left:Leavel_startX,width:FamilyItem_Width}]}
                //       <div key={"SenKey_"+i} style={'border:0,position:"absolute",flex-direction:"row",height:"100%",top:0,left:'+Leavel_startX+',width:'+FamilyItem_Width+','}>
                //           {FamilyItem}
                //       </div>
                //   );
  
                  Leavel_startX += FamilyItem_Width;
              }
          }else{
              //其他层级需要，根据上一层级的值来计算
              //遍历当前层有多少个家庭单位
              for(let i = 0 ; i < SeniorityData.levelFamilyTotal.length ; i++){
                  //console.log(SeniorityData.levelFamilyTotal[i]);
                  let FamilyItem_Width = SeniorityData.levelFamilyTotal[i].TotalWidth;  //家庭单位实际需要的面积
                  let Leavel_ParentInfos = this.getParentFamilyStart(leavelIndex,SeniorityData.levelFamilyArray[i],FamilyItem_Width);
                  SeniorityData.levelFamilyTotal[i].startX = Leavel_ParentInfos.startx;

                  let FamilyItem = this.renderEachFamily(SeniorityData.levelFamilyTotal[i],Leavel_ParentInfos,leavelIndex);  //家庭单位
                  
                  //console.log(leavelIndex,FamilyItem_Width , Leavel_ParentInfos.itemwidth);
                  let strVar = "";
                    strVar += "<div key='SenKey_"+i+"' style='"+_FamilyItem+";left:"+Leavel_ParentInfos.startx+"px;width:"+FamilyItem_Width+"px;'>\n";
                    strVar += "     "+FamilyItem+"\n";
                    strVar += "<\/div>\n"; 
                      //获取每一个家庭
                    Result += strVar;
                    // Result.push(
                    //     <div key={"SenKey_"+i} style="{border:0;position:'absolute';height:100%;top:0,flex-direction:'row';}" >
                    //         {FamilyItem}
                    //     </div>
                    // ); 
              }
          }

      }
    //   console.log(Result)
      return Result;
    },
    /**
     * 绘制每一个家庭的结构
     * @param FamilyData 家庭数据
     * @param ParentInfos 家庭的起始位置，以及所属家庭的宽度
     * @param leavelIndex 当前绘制的是第几层
     * @returns {Array}
     */
    renderEachFamily(FamilyData,ParentInfos,leavelIndex){
        // console.log("renderEachFamily",FamilyData,ParentInfos,leavelIndex);
        // let Result = [];
        let Result = "";
        if(FamilyData  && FamilyData.MemberArray && FamilyData.MemberArray.length > 0){
            let FimalyStartx = 0 , FimalyWidth = 0;
            for(let k = 0 ; k < FamilyData.MemberArray.length ; k++ ){ 
                let leftOffset = Math.abs(FamilyData.MemberWidthArray[k]-FamilyData.MemberRealyWidthArray[k]); 
                leftOffset = parseInt(leftOffset/2);
                if(k == 0){
                    FimalyStartx = leftOffset;
                } 
                //获取每个家庭的成员
                let MemberStructre = this.renderEachFamilyMember(FamilyData.MemberArray[k],leftOffset,leavelIndex,FimalyStartx,FimalyWidth,k,ParentInfos,FamilyData.MemberArray.length);
    
                if(FamilyData.MemberArray.length == 1){
                    //只有一条数据,但是存在配偶，
                    FimalyWidth = FamilyData.MemberArray[k].MarryObject ?  (FamilyData.MemberRealyWidthArray[k] / 2 + 1) : 0;
                }else{
                    //有多条数据
                    if(k == 0){
                        //是第一条数据，而且所占用的宽度比，自身需要的宽度大，说明存在子集
                        FimalyWidth +=  ((FamilyData.MemberWidthArray[k] - FamilyData.MemberRealyWidthArray[k])/2); //加上右边所占空间位置
                        FimalyWidth += FamilyData.MemberRealyWidthArray[k];
                    }
        
                    if(k != 0 && k != FamilyData.MemberArray.length-1){
                        //不是第一条也不是最后一条
                        FimalyWidth += FamilyData.MemberWidthArray[k];
                    }

                    if(k == FamilyData.MemberArray.length-1){
                        //这是最后一个家庭
                        FimalyWidth += FamilyData.MemberWidthArray[k]/2;
                        if(FamilyData.MemberArray[k].MarryObject){
                            //最后一个家庭的成员存在配偶，那么应该减去
                            FimalyWidth -= this.props.chartItemWidth * 0.5;
                        } 
                    }

                }
                
                //每个成员的结构
                // console.log(MemberStructre) 
                let strVar = "";
                    strVar += "<div key='FamilyKey_"+k+"' style='display:flex;height:"+this.chartItemHeight+"px;width:"+FamilyData.MemberWidthArray[k]+"px;'>\n";
                    strVar += "   "+MemberStructre+"\n";
                    strVar += "<\/div>\n"; 
                Result += strVar; 
                // Result.push(
                //     <div key={"FamilyKey_"+k} style={{height:this.chartItemHeight,width:FamilyData.MemberWidthArray[k]}}>
                //         {MemberStructre}
                //     </div>
                // );
            }
            
            //绘制横向线条
            if(leavelIndex){
                FimalyStartx = FimalyStartx + this.chartItemWidth / 2; //加上左侧偏移量
                FimalyWidth = FimalyWidth - this.chartItemWidth / 2; //减去左侧偏移量
                let strVar = "";
                strVar += "<div key="+leavelIndex+" style='position:absolute;height:2px;border-bottom:1px solid #fff;left:"+FimalyStartx+"px;width:"+FimalyWidth+"px;'><\/div> \n";
                Result += strVar; 
            }
            // console.log(Result)
            return Result;
        }else{
            let strVar = "";
                strVar += "<div><p style='color:\"#ffffff\"'>加载中...<\/p><\/div>\n";
                Result += strVar; 
            // Result.push(
            //     <div>
            //         <p style={{color:"#ffffff"}}>加载中...</p>
            //     </div>
            // );
            return Result;
        }
    },
    /**
     * 绘制每一个家庭成员
     * @param MemberData 家庭对象
     * @param leftOffset 家庭偏移量
     * @param leavelIndex 当前绘制的是第几层
     * @returns {*}
     */
    renderEachFamilyMember(MemberData,leftOffset,leavelIndex,FimalyOffset,FimalyWidth,isStart,FamilyParentInfos,isSingle){
        //console.log("绘制每一个家庭成员",MemberData.FamilyMember.Name,FimalyWidth,FamilyParentInfos,this.props.chartItemWidth);
        const _memberBox = "position:absolute;";
        const _userItem = "height:100%;width:100%;background-color:#ddd;border-radius:4px;";
        const _ManItem = "background-color:#badbf5;color:#333";
        const _WomenItem = "background-color:#f5baba;color:#333";
        const _SelfItem = "background-color:#8c67f9;color:#ffffff";
        const _userHeader = "display:flex;width:100%;height:35%;overflow:hidden;background-color:#fff;justify-content:center;borderradius:4px 4px 0 0";
        const _ManItemHeader = " background-color:#7db5e0;";
        const _WomenItemHeader = "background-color:#e07d7d;";
        const _userName = "word-break:break-all;max-width:100%;padding:4px;font-size:14px;text-align:center;align-items:flex-start;align-content:flex-start;height:65%;flex:1;";
        //作为子节点的顶部的线条
        const _SinglePrevLine = "display:flex;position:absolute;width:2px;border-left:1px solid #ffffff;top:0;";
         //无配偶但是有了孩子的
        const _SingleChildline = "display:flex;position:absolute;width:3px;border-left:1px solid #ffffff;bottom:0;";

        const _FqMemberBox = "display:flex;flex-direction:row;position:absolute;"
        const _FqCrossline = "display:flex;position:absolute;height:10px;border-bottom:1px solid #ffffff;top:50%";
        const _FqChildline = "display:flex;position:absolute;width:2px;border-left:1px solid #ffffff;height:50%;top:50%;";
        const _userHeaderPic ="width:80%;height:80%;align-self:center;"
        if(!MemberData.MarryObject){ 
            //这个图片地址 到时你根据上面的判断 选取不同的图片地址 
            // memberBox  position:absolute;
            var strVar = "";
                strVar += "<div style='"+_memberBox+";height:"+this.chartItemHeight+"px;left:"+leftOffset+"px;overflow:hidden;width:"+this.chartItemWidth+"px;padding:"+this.chartItemPadding+"px'>\n";
                //点击事件区域  对应 activeUserItem 事件
                strVar += "    <div class='minHei' onClick="+this.activeUserItem+">\n";
                // 判断类型添加样式
                const _Sex = MemberData.FamilyMember.Sex == 1 ? _ManItem : _WomenItem;
                const _SelfItem = MemberData.ID==this.FmidValue? _SelfItem:"";
                strVar += "          <div style='"+_userItem+";"+_Sex+";"+_SelfItem+"'>\n";
                //判断男女   
                const _SexImage = MemberData.FamilyMember.Sex == 1 ? _ManItemHeader : _WomenItemHeader
                //图片
                strVar += "               <image style='"+_userHeader+";"+_SexImage+";height:"+(this.chartItemHeight-this.chartItemPadding*2)*0.35+"px;width:100%' src='https://lh3.googleusercontent.com/a-/AAuE7mCuAc3AIrlJwp8-zSwA4iD6Nsdv_rbuWeGx_qMv=s32' />\n";
                //姓名
                strVar += "               <p style='"+_userName+";'>"+MemberData.FamilyMember.Name+"<\/p>\n";
                strVar += "          <\/div>\n";
                //线条
                if(leavelIndex){
                    strVar += "          <div style='"+_SinglePrevLine+";height:"+this.chartItemPadding+"px;left:"+(this.chartItemWidth/2)+"px;'><\/div>\n";
                }
                if( MemberData.ChildList ){
                    strVar += "          <div style='"+_SingleChildline+";height:"+this.chartItemPadding+"px;left:"+this.chartItemWidth/2+"px;'><\/div>\n";
                }
                strVar += "    <\/div>\n";
                strVar += " <\/div>\n";
            return strVar; 
        }else{ 
            // let HeaderPic = Images.genealogyIcon.chartManHead;  //自己的头像
            // let HeaderPic2 = Images.genealogyIcon.chartWomanHead; //配偶的头像

            let HeaderPic = "https://lh3.googleusercontent.com/a-/AAuE7mCuAc3AIrlJwp8-zSwA4iD6Nsdv_rbuWeGx_qMv=s32";  //自己的头像 
            let HeaderPic2 = "http://img.wxcha.com/file/201810/23/b76f0b75bb.jpeg";  //配偶的头像   

            let strVar = "";
                strVar += "<div style='"+_FqMemberBox+";left:"+leftOffset+"px;'>\n";
                strVar += "    <div style='display:flex;overflow:hidden; height:"+this.chartItemHeight+"px;width:"+this.chartItemWidth+"px;padding:"+this.chartItemPadding+"px;'>\n";
                //点击事件 activeUserItem
                strVar += "         <div style='flex:1;' onClick="+this.cleik+">\n";
                const _sex = MemberData.FamilyMember.Sex == 1 ? _ManItem : _WomenItem;
                const _SelfItem = MemberData.ID==this.FmidValue? _SelfItem:""
                strVar += "              <div style='"+_userItem+";"+_sex+";"+_SelfItem+"'>\n";
                const _sexImage = MemberData.FamilyMember.Sex == 1 ? _ManItemHeader : _WomenItemHeader
                strVar += "                 <image style='"+_userHeader+";"+_sexImage+";height:"+(this.chartItemHeight-this.chartItemPadding*2)*0.35+"px;width:100%' src='"+HeaderPic+"' />\n";
                strVar += "                 <p style='"+_userItem+"'>"+MemberData.FamilyMember.Name+"<\/p>\n";
                strVar += "              <\/div>\n";
                strVar += "         <\/div>\n";
                if(leavelIndex){
                    strVar += "     <div style='"+_SinglePrevLine+";height:"+this.chartItemPadding+"px;left:"+(this.chartItemWidth/2)+"px;'><\/div>\n";
                } 
                strVar += "    <\/div>\n"; 
                
                strVar += "    <div style='"+_FqCrossline+";left:"+(this.chartItemWidth-this.chartItemPadding)+"px;width:"+(this.chartItemPadding * 2 + 2)+"px;'><\/div>\n";
                if( MemberData.ChildList ){
                    strVar += "         <div style='"+_FqChildline+";left:"+(this.chartItemWidth)+"px;'><\/div>\n";
                }
                
                strVar += "         <div style='display:flex;float:left;overflow:hidden;height:"+this.chartItemHeight+"px;width:"+this.chartItemWidth+"px;padding:"+this.chartItemPadding+"px'>\n";
                //点击事件  activeUserItem
                strVar += "              <div style='flex:1' onClick="+this.click1+">\n";

                const _sex1 = MemberData.MarryObject.FamilyMember.Sex == 1 ? _ManItem : _WomenItem;
                const _SelfItem1 =MemberData.MarryObject.ID==this.FmidValue? _SelfItem:"";

                strVar += "                   <div style='"+_userItem+";"+_sex1+";"+_SelfItem1+"'>\n";
                                                   // userHeader
                                                   const _ItemHeader = MemberData.MarryObject.FamilyMember.Sex == 1 ? _ManItemHeader : _WomenItemHeader;
                strVar += "                        <div style='"+_userHeader+";"+_ItemHeader+"'>\n";
                strVar += "                             <image style='"+_userHeaderPic+";height:"+(this.chartItemHeight-this.chartItemPadding*2)*0.35+"px;width:"+(this.chartItemWidth-this.chartItemPadding*2)+"px;' src='"+HeaderPic2+"' />\n";
                strVar += "                        <\/div>\n";
                strVar += "                        <p style='"+_userName+"'>"+MemberData.MarryObject.FamilyMember.Name+"<\/p>\n";
                strVar += "                   <\/div>\n";
                strVar += "              <\/div>\n";
                strVar += "         <\/div>\n";
                strVar += "    <\/div>\n";
                strVar += "<\/div>\n";
                // console.log(strVar)
            return strVar;
            // <div style={'position:"absolute",flex-direction:"row",left:'+leftOffset+''}>
            //     <div style={'height:'+this.chartItemHeight+',overflow:"hidden",width:'+this.chartItemWidth+',padding:'+this.chartItemPadding+''}>
                    
            //         <div onClick={this.cleik}>
            //             <div style={''}>
            //                 <images src={HeaderPic} />
            //                 <p>"+ MemberData.FamilyMember.Name +"</p>
            //             </div>
                        
            //             <div style={'position:"absolute",width:1px,border-left:"1px solid #fff",top:0,height:'+this.chartItemPadding+',left:'+(this.chartItemWidth/2)+''}></div>
            //         </div>
                    
            //         <div style={'position:"absolute", border-bottom:"1px solid #fff",height:1px,top:50%, left:'+(this.chartItemWidth-this.chartItemPadding)+',width:'+(this.chartItemPadding * 2 + 2)+''}></div>
            //         <div style={'position:"absolute", border-bottom:"1px solid #fff",height:1px,top:50%, left:'+(this.chartItemWidth)+''}></div>
                    
            //         <div style={'height:'+this.chartItemHeight+',float:"left",overflow:"hidden",width:'+this.chartItemWidth+',padding:'+this.chartItemPadding+''}>
            //             <div onClick={this.click1}>

            //                 <div style={''}>
            //                     <div style={''}>
            //                         <images src="../../assets/logo.png"
            //                         style={'height:'+(this.chartItemHeight-this.chartItemPadding*2)*0.35+',width:'+(this.chartItemWidth-this.chartItemPadding*2)+''} />
            //                     </div>
            //                     <p style={'width:"100%",padding:4px,font-size:14px,text-align:"center",align-items:"flex-start",align-content:"flex-start",height:"65%",flex:1,text-align: "center"'}>MemberData.MarryObject.FamilyMember.Name</p>
            //                 </div>

            //             </div>
            //         </div>

            //     </div>
            // </div> 
        }
    }
  }
};
</script> 
