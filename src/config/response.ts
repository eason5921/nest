class  ResponseEntity<T> {
       /**
        * @description: 
        * @param {*data} private
        * @param {*success} private
        * @param {*message} private
        */        
       constructor(private data:Array<T> | T | string | number,private success:boolean,private message:string){}
}
export default ResponseEntity