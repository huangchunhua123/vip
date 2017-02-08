    var infoLists={
        lists:[
        {homeimg:'http://d.vpimg1.com/upcb/2016/07/11/111/51481557.jpg',title:'Marisfrolg',titleIntroduce:'玛丝菲尔织无不言 倾听质美',reduce:'跨专场满499减40，上不封顶',
            imglists:[
                {img:'http://a.vpimg3.com/upload/merchandise/pdc/922/896/738666650269896922/1/AA1510376-5.jpg',price:'110'},
                {img:'http://a.vpimg3.com/upload/merchandise/496388/MARISFROLG-AA1520316-5.jpg',price:'110'},
                {img:'http://a.vpimg3.com/upload/merchandise/496388/MARISFROLG-AA1520326-5.jpg',price:'110'}],
            storeName:'Marisdiarolg'},
        {homeimg:'http://d.vpimg1.com/upcb/2016/07/11/171/52387442.jpg',title:'MASFER.SU',titleIntroduce:'masfer.SU蝉鸣之夏 睿趣新生',reduce:'跨专场满499减40，上不封顶',
            imglists:[
                {img:'http://a.vpimg3.com/upload/merchandise/pdc/499/311/80296595605311499/1/MAS-B11324426-5.jpg',price:'119'},
                {img:'http://a.vpimg3.com/upload/merchandise/428613/MASFERSU-B11327106-5.jpg',price:'119'},
                {img:'http://a.vpimg3.com/upload/merchandise/428613/MASFERSU-B11329086-5.jpg',price:'239'}],
            storeName:'MASFER.SU'},
        {homeimg:'http://c.vpimg1.com/upcb/2016/07/11/192/53238831.jpg',title:'AUM',titleIntroduce:'AUM时光旅人 从心而归',reduce:'跨专场满499减40，上不封顶',
            imglists:[
                {img:'http://a.vpimg4.com/upload/merchandise/pdc/832/205/4403752366640205832/0/AOMU-M11420156-5.jpg',price:'504'},
                {img:'http://a.vpimg4.com/upload/merchandise/pdc/136/816/9008964486064816136/0/M1133155M-5.jpg',price:'495'},
                {img:'http://a.vpimg4.com/upload/merchandise/pdc/332/240/4478624710445240332/0/AOMU-M11421796-5.jpg',price:'497'}],
            storeName:'AUM'},
        {homeimg:'http://d.vpimg1.com/upcb/2016/07/11/93/55338117.jpg',title:'TRENDIANO',titleIntroduce:'TRENDIANO型男夏日 潮搭必备',reduce:'跨专场满499减40，上不封顶',
            imglists:[
                {img:'http://a.vpimg4.com/upload/merchandise/501970/T-3142012720000-5.jpg',price:'504'},
                {img:'http://a.vpimg4.com/upload/merchandise/489650/TRENDIANO-3142020380090-5.jpg',price:'495'},
                {img:'http://a.vpimg4.com/upload/merchandise/pdc/345/758/951461687359758345/1/3143010380000-5.jpg',price:'497'}],
            storeName:'TRENDIANO'},
        {homeimg:'http://d.vpimg1.com/upcb/2016/07/11/87/5453534.jpg',title:'海澜之家',titleIntroduce:'海澜之家青春张扬 清凉时尚',reduce:'新会员专享，满198减50',
            imglists:[
                {img:'http://a.vpimg2.com/upload/merchandise/pdc/704/938/6660337264525938704/0/HNTBJ2N121AC1-5.jpg',price:'504'},
                {img:'http://a.vpimg2.com/upload/merchandise/pdc/375/674/3849528124767674375/1/HNTBD2N345AX5-5.jpg',price:'495'},
                {img:'http://a.vpimg2.com/upload/merchandise/pdc/214/755/4180261228456755214/0/HNTBJ2N187AJ7-5.jpg',price:'497'}],
            storeName:'海澜之家'},
        {homeimg:'http://d.vpimg1.com/upcb/2016/07/11/59/56002016.jpg',title:'TUMI',titleIntroduce:'TUMI澳洲原创 时尚传奇',reduce:'',
            imglists:[
                {img:'http://a.vpimg4.com/upload/merchandise/pdc/978/307/5129676334804307978/0/1511526-5.jpg',price:'504'},
                {img:'http://a.vpimg4.com/upload/merchandise/pdc/245/602/5140090908942602245/0/1587688-5.jpg',price:'495'},
                {img:'http://a.vpimg4.com/upload/merchandise/pdc/607/150/5130802234711150607/0/1587689-5.jpg',price:'497'}],
            storeName:'TUMI'}
        ]
    }
    var allInfo=new Vue({
        el:'.main-lists',
        data:infoLists
    })
 
     var imgLists={
        lists:[
            {img:'http://b.appsimg.com/2016/04/22/9971/14613080350225.jpg'},
            {img:'http://b.appsimg.com/2016/04/26/7173/14616729127710.jpg'}
        ]
    }
    var cycleImg=new Vue({
        el:'.slides',
        data:imgLists
    })