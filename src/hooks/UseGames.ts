import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";
import useData from "./UseData";

export interface Platform {
    id:number,
    name:string,
    slug:string

}

export interface Game {
    id: number,
    name: string;
    background_image : string;
    parent_platform :{platform:Platform}[] ;
    rating:number
}

const useGames = () => useData<Game>("/games");
 

export default useGames;