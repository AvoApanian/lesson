#include <iostream>
#include <string>
using namespace std;

class Animal {
protected:
    string name;
    int age;

public:
    Animal(string n, int a) {
        name = n;
        age = a;
    }

    virtual void speak() {
        cout << name << " makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    Dog(string n, int a) : Animal(n, a) {}

    void speak() override {
        cout << name << " says Woof" << endl;
    }
};

class Cat : public Animal {
public:
    Cat(string n, int a) : Animal(n, a) {}

    void speak() override {
        cout << name << " says Meow " << endl;
    }
};

int main() {
    Animal a("GenericAnimal", 5);
    Dog d("max", 3);
    Cat c("(cat Name)", 2);

    a.speak();  
    d.speak();  
    c.speak();  

    return 0;
}
