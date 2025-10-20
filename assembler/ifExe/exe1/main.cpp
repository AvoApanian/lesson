#include <iostream>

int main() {
    int result;

    asm volatile (
        "movl $5, %%eax;\n\t"
        "movl $10, %%ebx;\n\t"
        "cmp %%eax, %%ebx;\n\t"
        "jle 0f;\n\t"          
        "movl $1, %%ecx;\n\t"  
        "jmp 1f;\n\t"          
        "0:\n\t"               
        "movl $0, %%ecx;\n\t"  
        "1:\n\t"               
        "movl %%ecx, %0;\n\t"  
        : "=r"(result)
        :
        : "%eax", "%ebx", "%ecx"
    );

    std::cout << result << std::endl;
    return 0;
}

