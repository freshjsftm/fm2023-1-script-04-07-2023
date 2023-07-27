
const object = {
  _prop: 12,
  get prop(){
    return this._prop;
  },
  set prop(value){
    //throw Error
    this._prop = value;
  }
}
object.prop = 45;
console.log(object.prop);