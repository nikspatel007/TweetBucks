import {TwitterUser} from './twitter-user';

export interface Timeline {
        coordinates?: any;
        favorited: boolean;
        truncated: boolean;
        created_at: string;
        id_str: string;
        in_reply_to_user_id_str?: any;
        contributors?: any;
        text: string;
        retweet_count: number;
        in_reply_to_status_id_str?: any;
        id: number;
        geo?: any;
        retweeted: boolean;
        possibly_sensitive: boolean;
        in_reply_to_user_id?: any;
        place?: any;
        user: TwitterUser;
        in_reply_to_screen_name?: any;
        source: string;
        in_reply_to_status_id?: any;
}
