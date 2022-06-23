import { getPicturePath, isPictureInThumb, createPictureThumb } from '../routes/api/pictures'
import path from 'path';


const THUMB_PATH = path.resolve(__dirname, '../../assets/thumb');
const FULL_PATH = path.resolve(__dirname, '../../assets/full');

describe('get picture path', (): void => {
    it('send invalid picture data', async (): Promise<void> => {
        const result: null | string = await getPicturePath('', '', '');
        expect(result).toBeNull();
    });

    it('send invalid picture name', async (): Promise<void> => {
        const result: null | string = await getPicturePath('test', '200', '200');
        expect(result).toBeNull();
    });

    it('send invalid picture width', async (): Promise<void> => {
        const result: null | string = await getPicturePath('test', 'aaa', '200');
        expect(result).toBeNull();
    });

    it('send invalid picture height', async (): Promise<void> => {
        const result: null | string = await getPicturePath('test', '200', 'aaa');
        expect(result).toBeNull();
    });

    it('send valid picture data', async (): Promise<void> => {
        const result: null | string = await getPicturePath('background', '200', '200');
        expect(result).toEqual(path.resolve(THUMB_PATH, 'background_200X200.jpg'));
    });

    it('send valid picture data without width and height', async (): Promise<void> => {
        const result: null | string = await getPicturePath('background', '', '');
        expect(result).toEqual(path.resolve(FULL_PATH, 'background.jpg'));
    });
});

describe('check if Picture is in thumb', (): void => {
    it('check picture already exists', async (): Promise<void> => {
        const result: boolean = await isPictureInThumb('background', '200', '200');
        expect(result).toBeTrue();
    });

    it('check picture doesn\'t exists', async (): Promise<void> => {
        const result: boolean = await isPictureInThumb('anyName', '400', '400');
        expect(result).toBeFalse();
    });

    it('check picture with wrong data', async (): Promise<void> => {
        const result: boolean = await isPictureInThumb('anyName', 'aaa', 'bbb');
        expect(result).toBeFalse();
    });
    it('check if don\'t send any picture data', async (): Promise<void> => {
        const result: boolean = await isPictureInThumb('', '', '');
        expect(result).toBeFalse();
    });
});


describe('image processing with sharp', (): void => {
    it('create Picture Thumb with name, width and height', async (): Promise<void> => {
        const result: null | string = await createPictureThumb('background', '200', '200');
        expect(result).toBeNull();
    });

    it('send invalid data to create Picture Thumb', async (): Promise<void> => {
        const result: null | string = await createPictureThumb('', '', '');
        expect(result).toEqual('Error');
    });

    it('send only Picture name', async (): Promise<void> => {
        const result: null | string = await createPictureThumb('background', '', '');
        expect(result).toEqual('Error');
    });

    it('send invalid width', async (): Promise<void> => {
        const result: null | string = await createPictureThumb('background', 'aaa', '200');
        expect(result).toEqual('Error');
    });
    it('send invalid height', async (): Promise<void> => {
        const result: null | string = await createPictureThumb('background', '200', 'aaa');
        expect(result).toEqual('Error');
    });
});




// describe('image processing with sharp', (): void => {


    //     // Note: Could also fail because of directory permissions
    //     it('succeeds to write resized thumb file (existing file, valid size values)', async (): Promise<void> => {
    //         await File.createThumb({
    //             filename: 'santamonica',
    //             width: '245',
    //             height: '245'
    //         });

    //         const resizedImagePath: string = path.resolve(
    //             File.imagesThumbPath,
    //             `santamonica-254x245.jpg`
    //         );
    //         let errorFile: null | string = '';

    //         try {
    //             await fs.access(resizedImagePath);
    //             errorFile = null;
    //         } catch {
    //             errorFile = 'File was not created';
    //         }

    //         expect(errorFile).not.toBeNull();
    //     });
    // });

    // // Erase test file. Test should not run on productive system to avoid cache loss
    // afterAll(async (): Promise<void> => {
    //     const resizedImagePath: string = path.resolve(
    //         File.imagesThumbPath,
    //         'santamonica-245x245.jpg'
    //     );

    //     try {
    //         await fs.access(resizedImagePath);
    //         fs.unlink(resizedImagePath);
    //     } catch {
    //         // intentionally left blank
    //     }
// });
