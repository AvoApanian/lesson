#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string name;
    float money;

public:
    BankAccount(string n, float m) {
        name = n;
        money = m;
    }

    void add(float n) {
        if (n > 0) {
            money += n;
            cout << "add -> " << n << "succesfully" << endl;
        } else {
            cout << "error" << endl;
        }
    }

    void remove(float n) {
        if (n > 0 && n <= money) {
            money -= n;
            cout << "remove " << n << endl;
        } else {
            cout << "Error" << endl;
        }
    }

    void print() {
        cout << "money -> " << name << " : " << money << endl;
    }
};

int main() {
    BankAccount bankAccount("Bob", 100);

    bankAccount.add(10);
    bankAccount.remove(5);
    bankAccount.print();

    return 0;
}
