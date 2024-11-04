import os
import pprint

root_folder = r'E:\music prod\sample packs\apple_loops'
copy_to_folder = r'E:\music prod\sample packs\apple_loops\0_converted'

# {'folder_name': ['file1', 'file2', 'file3']}
file_dict = {}

for folder in os.listdir(root_folder):
    cur_folder = os.path.join(root_folder, folder)

    if os.path.isdir(cur_folder):
        file_dict[folder] = []
        for file in os.listdir(cur_folder):
            cur_file_path = os.path.join(cur_folder, file)
            if os.path.isfile(cur_file_path):
                file_dict[folder].append(cur_file_path)

""""
# now go through dict and convert if wav.
# otherwise we just move to target folder as is
for sound_pack in file_dict:
    for sound_file in file_dict[sound_pack]:
        if sound_file.endswith('.wav'):
            print(sound_file)
        if sound_file.endswith('.caf'):
            # add file to cur_folder_dict with key folder and value file
            file_dict[sound_pack].append(sound_file)
"""

pprint.pprint(file_dict)
