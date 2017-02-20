export interface Identity {
        access_token: string;
        access_token_secret: string;
        provider: string;
        user_id: string;
        connection: string;
        isSocial: boolean;
    }

export interface User {
        name: string;
        picture: string;
        description: string;
        lang: string;
        location: string;
        screen_name: string;
        url: string;
        updated_at: Date;
        user_id: string;
        nickname: string;
        identities: Identity[];
        created_at: Date;
        last_ip: string;
        last_login: Date;
        logins_count: number;
    }
