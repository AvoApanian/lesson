#include <iostream>


void printArr(int *arr,int len){
	for (int i = 0;i<len;i++){
		std::cout<<*(arr + i)<<std::endl;
	}
}

int min (int *arr,const int len){
	int mini = *arr;

	for (int i = 0;i<len;i++){
		if (*(arr + i) < mini) {
			mini = *(arr + i);
		}
	}

	return mini;	
}

int max (int *arr,const int len){
	int maxi = *arr;
	for (int i = 0;i<len;i++){
		if (*(arr + i) > maxi){
			maxi = *(arr + i);
		}
	}

	return maxi;
}


int sum (int *arr,const int len){
	int som = 0;
	for (int i = 0;i<len;i++){
		som += *(arr + i);
	}

	return som;
}

void swapFirstLast (int *arr,const int len){
	int first = *arr;
	int last = *(arr + (len - 1));
	*arr = last;
	*(arr + (len - 1)) = first;
}

void printAddress (int *arr,const int len){
	for (int i = 0;i<len;i++){
		std::cout<<*(arr + i)<<"->"<<(arr + i)<<std::endl;
	}
}


void rotateLeft (int *arr,const int len) {
	if (len <= 1)return;

	int first = *arr;

	for (int i =0;i<len;i++){
		*(arr + i) = *(arr + (i + 1));
	}

	*(arr + (len - 1)) = first;
}

void rotateRight (int *arr,const int len){
	if (len <= 1)return;

	int last = *(arr + (len - 1));

	for(int i = len - 1;i > 0;i--){
		*(arr + i) = *(arr + (i -1));
	}

	*arr = last;
}

bool isPali (int *arr,const int len){
	int *left = arr;
	int *right = arr + (len - 1);

	while (left < right){
		if (*left != *right){
			return false;
		}

		left++;
		right --;
	}
	return true;
}


int getID (int *arr,const int len,int n){
	for (int i = 0;i<len;i++){
		if (*(arr + i) == n){
			return i;
		}
	}
	return -1;
}


int main (){
	int len = 5;
	int arr[len] = {55,36,2,-50,5};

	//printArr(arr,len);
	//std::cout<<"minimum -> "<<min(arr,len)<<std::endl;
	//std::cout<<"maximum -> "<<max(arr,len)<<std::endl;
	//std::cout<<"sum ->"<<sum(arr,len)<<std::endl;

	//swapFirstLast(arr,len);

	//rotateLeft(arr,len);
	//rotateRight(arr,len);

	//for (int i = 0;i<len;i++){
	//	std::cout<<*(arr + i)<<std::endl;
	//}
	

	//printAddress(arr,len);

	//std::cout<<isPali(arr,len)<<std::endl;

	std::cout<<getID(arr,len,-50)<<std::endl;

	return 0;
}

