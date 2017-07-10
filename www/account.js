$(function () {

        $('.li-quantity a').click(function(){
            var self = $(this);
            var type = self.attr('data-type'),
                num = parseFloat(self.siblings('input').val());
            if(type == 'add'){
                num += 1;
            }else if(type == 'subtr'){
                if(num > 1){
                    num -= 1;
                }else{
                    return false;
                }
            }
            self.siblings('input').val(num);
            tamount();
        });
        
    
     
      $('input[name="chkItem"]:checkbox').click(function(){
                var isCheck = $('input[name="chkItem"]:not(:checked)').length?false:true;
                $('#CheckAll').prop("checked",isCheck);
                tamount();
            });


            $('#CheckAll').click(function(){
                var self = $(this);
                $('input[name="chkItem"]').each(function(){
                    $(this).prop("checked",self.is(':checked'));
                });
                tamount();
            });

        });
        var sum = 0;

        function  Clearing(){
            $('input[name="chkItem"]:checked').each(function(){
                var self = $(this),
                        index = self.attr('data-index'),
                        cid = self.attr('data-id');
                var quantity = $('#Q'+index).val();
                var data = { "cid": cid, "cnum":quantity};
                $.ajax({
                    url:'/cart/clearing',
                    type:'post',
                    data:data,
                    success:function(data,status){

                    },
                    error:function(data,status){

                    }
                });
            });
            alert('￥'+sum);
            location.href = "cart";
        }
        function tamount(){
            sum = 0;
            $('input[name="chkItem"]:checked').each(function(){
                var self = $(this),
                    price = self.attr('data-price'),
                    index = self.attr('data-index');
                var quantity = $('#Q'+index).val();
                sum +=(parseFloat(price)*parseFloat(quantity));
            });
            $("#money").html('￥'+ sum +'.00');
        }