#include <iostream>
using namespace std;

int main() {
    int a, b;
    char op;

    cout << "Enter a: "; cin >> a;
    cout << "Enter op (+,-,*): "; cin >> op;
    cout << "Enter b: "; cin >> b;

    int result;

    asm (
        "movb %1, %%al;"       
        "cmpb $'+', %%al;"
        "je add_op;"
        "cmpb $'-', %%al;"
        "je sub_op;"
        "cmpb $'*', %%al;"
        "je mul_op;"
        "movl $-1, %0;"
        "jmp done;"
        "add_op:"
        "movl %2, %%eax;"
        "addl %3, %%eax;"
        "movl %%eax, %0;"
        "jmp done;"
        "sub_op:"
        "movl %2, %%eax;"
        "subl %3, %%eax;"
        "movl %%eax, %0;"
        "jmp done;"
        "mul_op:"
        "movl %2, %%eax;"
        "imull %3, %%eax;"
        "movl %%eax, %0;"
        "done:"
        : "=r" (result)             
        : "r" (op), "r" (a), "r" (b) 
        : "%eax", "%al"
    );

    if (result != -1)
        cout << "Result = " << result << endl;
    else
        cout << "Operator not supported!" << endl;

    return 0;
}

