"use client";
import { FC, useState } from "react";
// import {MP4Clip} from '@webav/av-cliper';

import {Button, Radio, Space} from 'antd';

const assetsPrefix = <T extends string[] | Record<string, string>>(
        assetsURL: T
    ): T => {
        const prefix = process.env.NODE_ENV === 'development' ? '/' : '/WebAV/';
        if (Array.isArray(assetsURL)) {
            return assetsURL.map((url) => `${prefix}${url}`) as T;
        }
    
        return Object.fromEntries(
            Object.entries(assetsURL).map(([k, v]) => [k, `${prefix}${v}`])
        ) as T;
}

const videos = assetsPrefix({
    'test1.mp4': 'video/test1.mp4',
    'bear.mp4': 'video/bear-vp9.mp4',
  });

const PageVideo: FC = () => {
    const [speed, setSpeed] = useState(1);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>(null);

    const start = async (speed:number, videoType: keyof typeof videos, ctx: CanvasRenderingContext2D) => {
        // const resp1 = await fetch(videos[videoType]);
        // const clip = new MP4Clip(resp1.body!);
        // await clip.ready;
        // timesSpeedDecode(speed, clip, ctx);
    }

    // const timesSpeedDecode = async (times: number, clip: MP4Clip, ctx: CanvasRenderingContext2D) => {
    //     if(times === Infinity) {
    //         let time = 0;
    //         while(true) {
    //             const {state, video} = await clip.tick(time);
    //             if(state === 'done') break;
    //             if(state === 'success' && video) {
    //                 ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //                 ctx.drawImage(
    //                     video, 
    //                     0,
    //                     0,
    //                     video.codedWidth,
    //                     video.codedHeight, 
    //                     0,
    //                     0,
    //                     ctx.canvas.width,
    //                     ctx.canvas.height
    //                 );
    //                 video.close();
    //             };
    //             time += 33000;
    //         }
    //         clip.destroy();
    //     } else {
    //         let startTime = performance.now();
    //         const timer = setInterval(async () => {
    //             const {state, video} = await clip.tick(
    //                 Math.round((performance.now() - startTime) * 1000) * times
    //             );
    //             if(state === 'done') {
    //                 clearInterval(timer);
    //                 clip.destroy();
    //                 return;
    //             }
    //             if(state === 'success' && video) {
    //                 ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //                 ctx.drawImage(
    //                     video, 
    //                     0,
    //                     0,
    //                     video.codedWidth,
    //                     video.codedHeight, 
    //                     0,
    //                     0,
    //                     ctx.canvas.width,
    //                     ctx.canvas.height
    //                 );
    //             }
    //         }, 1000 / 30)
    //     }
    // }

    return(
        <main className="flex min-h-screen flex-col items-center gap-6 justify-start p-24">
            <canvas
                className="w-[300px] h-[400px]"
                ref={e => setCtx(e?.getContext('2d'))}
            />
            <Space>
                <Radio.Group
                    onChange={(e) => {
                        setSpeed(e.target.value);
                    }}
                    value={speed}
                    >
                    <Radio value={Infinity}>最快</Radio>
                    <Radio value={3}>3 倍速</Radio>
                    <Radio value={1}>1 倍速</Radio>
                </Radio.Group>
                <Button onClick={() => start(speed, 'test1.mp4', ctx as CanvasRenderingContext2D)}>启动</Button>
            </Space>
        </main>
    )
}

export default PageVideo;
