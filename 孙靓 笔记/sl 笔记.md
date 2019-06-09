1.用ES5实现let和const 
  let 通过闭包来实现 
  const 通过属性描述符 ：definPrototype ：writable，configgurable，enurmable,value,get,set
	writable:是否可写 默认值false   
	configurable：是否可被删除
	enurmable：是否可被遍历
	value：给对象赋值
	get：获取对象得值
	set：给对象赋值
     <script>
        let obj={a:111};
        Object.defineProperty(obj,'a',{
            //是否可写
            writable:true
        })
        Object.defineProperty(obj,'a',{
            //给对象赋value值
            value:'12345678'
        })
        Object.defineProperty(obj,'a',{
            //是否可以遍历
            enumerable:false
        })
        for (let i in obj) {
            console.log(obj)
        }
        Object.defineProperty(obj,'a',{
            //是否可被删除
            configurable:false
        })
        Object.defineProperty(obj,'a',{
            //获取对象得值
            get(){

            },
            //给对象赋值
            set(val){
                console.log('val',val)
            }
        })
    </script>

2.ES6 proxy
	new Proxy（对象，{
		get（target，key）{
		    console.log(target,key)
		}
		set（target，key，val）{
		    console.log(target,key,val)
		}
	}）
    <script>
        let obj2={b:123}
        let proxy = new Proxy(obj2,{
            get(target,key){
                console.log(target,key) // {b:123} "b"
            },
            set(target,key,val){
                console.log(target,key,val) //{b:123} "b" val
            }
        })
    </script>
    
3.Promise async/await generator
	
	Promise 三种状态：pennding，resolved/fufilled，rejected  // 等待 成功 失败
	        Promise的状态是不可改变的
        <script>
            let imgSrc="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2033838781,461625559&fm=27&gp=0.jpg"
            function imgLoad(url){
                return new Promise((resolve,reject)=>{
                    let img = new Image();
                    img.src=url
                    img.onload=function(){
                        resolve(img)
                    }
                    img.onerror=function(e){
                        reject(e)
                    }
                })
            }
            //在promise链式调用的时候如果 第一次是成功 那么下面的都是成功 ， 如果是失败，下面的就都是失败
            imgLoad(imgSrc).then(res=>{
                document.body.appendChild(res) 
                return resv // return 返回一个promise
            },err=>{
                console.log(err)
            }).then(res1=>{
                console.log(res1)
            },err1=>{
                
            }).then(res2=>{
    
            },err2=>{
                
            }).then(res3=>{
    
            },err3=>{
                
            }).then(res4=>{
    
            },err4=>{
                
            })
        </script>
        
4.判断数据类型 
    1.typeof  默认返回 string  
        可以判断类型为 Number String Boolean Object Null undefined 
        引用数据类型只能判断为： Object
    2.instanceof 返回值为 boolean
        可以判断该值是数组还是对象
        列:[] instanceof Array // 返回true
    3.[].constructor==Object/Array 
        返回值为 boolean
        列：[].constructor==Array //返回true