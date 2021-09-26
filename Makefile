all:
	emcc -s FILESYSTEM=1 -O3 -s ASYNCIFY -s EXPORTED_RUNTIME_METHODS='["callMain"]' metamath/*.c -o meta.js