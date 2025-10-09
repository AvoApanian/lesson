#include <iostream>
#include <string>

bool isPalidrome (const std::string s){
	int n = s.size();

	for (int i = 0;i < n/2;i++){
		if (s[i] != s[n - 1 - i]){
			return false;
		}
	}
			
	return true;
}

std::string removeSpace (const std::string s){
	std::string response;

	for (char c:s){
		if (c != ' '){
			response += c;
		}
	}

	return response;
}

bool areEqual (const std::string str,const std::string str2){
	if (str.size() != str2.size()){
		return false;
	}

	for (int i = 0;i<str.size();i++){
		if (str[i] != str2[i]){
			return false;
		}
	}

	return true;
}

std::string removeChar (const std::string str,const char ch){
	std::string newStr;

	for (char c:str){
		if (c != ch){
			newStr += c;
		}
	}

	return newStr;
}

int main (){
	//std::cout<<isPalidrome("kayak")<<std::endl;
	//std::cout<<isPalidrome("hello")<<std::endl;
	//std::cout<<removeSpace("hello world")<<std::endl;
	//std::cout<<areEqual("text","text")<<std::endl;
	//std::cout<<areEqual("cpp","js")<<std::endl;
	std::cout<<removeChar("hello",'l')<<std::endl;
	
	return 0;
}
