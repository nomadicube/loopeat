import os
import ffmpeg

#root_folder = r'E:\music prod\sample packs\apple_loops'
#copy_to_folder = r'E:\music prod\sample packs\apple_loops\0_converted'

## testing 
root_folder = r'E:\music prod\sample packs\apple_loops\test'
copy_to_folder = r'E:\music prod\sample packs\apple_loops\0_converted'

to_convert = []
#loop through each folder in root_folder
for folder in os.listdir(root_folder):
    cur_folder = os.path.join(root_folder, folder)
    cur_folder_dict = {}

    if os.path.isdir(cur_folder):
        for file in os.listdir(cur_folder):
            if file.endswith('.wav'):
                print(file)
            if file.endswith('.caf'):
                # add file to cur_folder_dict with key folder and value file
                cur_folder_dict[folder] = file
                to_convert.append(cur_folder_dict)

    print(cur_folder_dict)


