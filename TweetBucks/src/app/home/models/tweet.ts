 import {TwitterUser} from './twitter-user';
 
 export interface Tweet {
        created_at: string;
        id: number;
        id_str: string;
        text: string;
        user: TwitterUser;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
    }
