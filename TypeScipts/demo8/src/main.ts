import {Networking} from "./helper";
import * as _ from 'lodash';

class  App implements  Networking{
title = "SRepo";

getUsers(){
return[{name:"Sourabh"}];
}

}

console.log(_.isArray( new App().getUsers()) )

