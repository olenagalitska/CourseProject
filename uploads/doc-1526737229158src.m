clc
clear

%-------------------------------------------??????????????

input = imread('Data/y10.bmp'); % ?????? ??????????
focused = double(input);
figure('Name', 'Focused input.')
imshow(uint8(focused))

r = 15; % ?????? ??????????????
% ?????????? ????????? ??????? ????? ???????????? ???'?
h = H(focused, r);
defocused = ifft2(fft2(focused) .* fft2(h));

figure('Name', 'Defocused.')
imshow(uint8(defocused))

%------------------------------------------???????????

input = imread('Data/y41.bmp'); % ?????? ?? ??????????? ??????????
unfocused = double(input);
figure('Name', 'Unfocused input.')
imshow(uint8(defocused))

[result, r] = restore(defocused);
figure('Name', 'Restored.')
imshow(uint8(result))