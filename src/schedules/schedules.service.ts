import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SchedulesService {

    constructor(private readonly http: HttpService) { }

    private logger: Logger = new Logger('SchedulesService');

    // @Cron('* * * * * *')
    fetchData() {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(res => {
                // console.table(res.data)
            })

    }

    // @Cron('* * * * * *')
    postData() {
        this.http.get('https://jsonplaceholder.typicode.com/comments')
            .subscribe(res => {
                (res.data as Array<any>).forEach(({ id, name, email }) => console.log({ id, name, email }))
            })

    }

}
