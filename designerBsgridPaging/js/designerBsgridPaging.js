let designerBsgridPaging = {
    designerPageBar:{
        //统计页数,生成页数展示块
        countPage:function(data){
            let pageBlock;
            if(data%billTable.billTableParam.pageSize == 0){
                pageBlock = parseInt(parseInt(data/billTable.billTableParam.pageSize));
            }else{
                pageBlock = parseInt(parseInt(data/billTable.billTableParam.pageSize)+1);
            }
            let html = "";
            //判断页数是否超过6
            if(pageBlock > 6){
                //生成第一页，同时判断页码是否为1
                if(billTable.billTableParam.curPage == 1){
                    //若为1则为第一页添加选中状态样式
                    html += "<div class='page_block page_block_active' onclick='billTable.goPageFuntion(" + 1 + ")'>" + 1 + "</div>";
                }else if(billTable.billTableParam.curPage != 1){
                    //否则单纯添加第一页
                    html += "<div class='page_block' onclick='billTable.goPageFuntion(" + 1 + ")'>" + 1 + "</div>";
                }
                //判断中间需要展示的页码块的起始值
                let origin = billTable.billTableParam.curPage - 1;
                //如果起始值小于等于2，则将中间展示页码块的初始值设为2
                if(origin <= 2){
                    origin = 2
                } else if(origin >= pageBlock - 2){
                    //如果起始值大于等于倒数第三个页码块，则将初始值设为倒数第三个页码块
                    origin = pageBlock - 3;
                }

                if(origin <= 2){
                    //初始页码块小于等于2的生成部分
                    for(let a = 0;a < 3;a++){
                        let index = origin + a;
                        if(billTable.billTableParam.curPage == index){
                            html += "<div class='page_block page_block_active' onclick='billTable.goPageFuntion(" + index + ")'>" + index + "</div>";
                        }else if(billTable.billTableParam.curPage != index){
                            html += "<div class='page_block' onclick='billTable.goPageFuntion(" + index + ")'>" + index + "</div>";
                        }
                    }
                    html += "<div class='points'>···</div>";
                } else if(origin >= pageBlock - 3){
                    //初始页码块大于等于3的生成部分
                    html += "<div class='points'>···</div>";
                    for(let a = 0;a < 3;a++){
                        let index = origin + a;
                        if(billTable.billTableParam.curPage == index){
                            html += "<div class='page_block page_block_active' onclick='billTable.goPageFuntion(" + index + ")'>" + index + "</div>";
                        }else if(billTable.billTableParam.curPage != index){
                            html += "<div class='page_block' onclick='billTable.goPageFuntion(" + index + ")'>" + index + "</div>";
                        }
                    }
                }else{
                    //初始页码在中间部分时的生成部分
                    html += "<div class='points'>···</div>";
                    for(let a = 0;a < 3;a++){
                        let index = origin + a;
                        if(billTable.billTableParam.curPage == index){
                            html += "<div class='page_block page_block_active' onclick='billTable.goPageFuntion(" + index + ")'>" + index + "</div>";
                        }else if(billTable.billTableParam.curPage != index){
                            html += "<div class='page_block' onclick='billTable.goPageFuntion(" + index + ")'>" + index + "</div>";
                        }
                    }
                    html += "<div class='points'>···</div>";
                }

                //生成最后一个页码块
                if(billTable.billTableParam.curPage == pageBlock){
                    html += "<div class='page_block page_block_active' onclick='billTable.goPageFuntion(" + pageBlock + ")'>" + pageBlock + "</div>";
                }else if(billTable.billTableParam.curPage != pageBlock){
                    html += "<div class='page_block' onclick='billTable.goPageFuntion(" + pageBlock + ")'>" + pageBlock + "</div>";
                }
            }else{
                //当页码数量小于6时，直接生成所有页码块
                for(let a = 0;a < pageBlock;a++){
                    let index = a + 1;
                    if(billTable.billTableParam.curPage == index){
                        html += "<div class='page_block page_block_active' onclick='billTable.goPageFuntion(" + index + ")'>" + index + "</div>";
                    }else if(billTable.billTableParam.curPage != index){
                        html += "<div class='page_block' onclick='billTable.goPageFuntion(" + index + ")'>" + index + "</div>";
                    }
                }
            }

            $(".page_index").html(html);
            //当当前选择页面在第一页或最后一页时，隐藏上一页或者下一页按钮
            if(billTable.billTableParam.curPage == 1){
                $(".page_up").css('display','none');
            }else{
                $(".page_up").css('display','block');
            }
            if(billTable.billTableParam.curPage == pageBlock){
                $(".page_down").css('display','none');
            }else{
                $(".page_down").css('display','block');
            }
        },
        init:function () {
            //上一页
            $(".page_up").click(function () {
                billTable.billTableParam.thisPageCash = 0;
                billTable.billTableParam.thisPageIncount = 0;
                billTable.billTableParam.curPage--;
                billTable.init();
            });
            //下一页
            $(".page_down").click(function () {
                billTable.billTableParam.thisPageCash = 0;
                billTable.billTableParam.thisPageIncount = 0;
                billTable.billTableParam.curPage++;
                billTable.init();
            });
            //跳页
            $(".go_page").click(function () {
                if($(".go_page_index").val() == ""){
                    alert("请输入跳转页数");
                    return;
                }
                if($(".go_page_index").val() > $(".page_index").children().length){
                    alert("请输入正确的页数");
                    return;
                }else{
                    billTable.billTableParam.curPage = $(".go_page_index").val();
                    billTable.init();
                    $(".go_page_index").val("");
                }
            })
        }
    },
    goPageFuntion:function(index){
        billTable.billTableParam.curPage = index;
        billTable.init();
    },
}