nums = (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)

print("Welcome to the Number Assistant")
print("This program helps you practice Python loops.\n")

while True:
    print("\nChoose an option:")
    print("1. Print numbers from 1 to N")
    print("2. Print numbers from N to 1")
    print("3. Sum of first N numbers")
    print("4. Factorial of a number")
    print("5. Multiplication table")
    print("6. Search a number in a tuple")
    print("7. Print numbers (skip multiples of 3)")
    print("8. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        n = int(input("Enter N: "))
        for i in range(1, n + 1):
            print(i)

    elif choice == 2:
        n = int(input("Enter N: "))
        i = n
        while i >= 1:
            print(i)
            i -= 1

    elif choice == 3:
        n = int(input("Enter N: "))
        total = 0
        j = 1
        while j <= n:
            total += j
            j += 1
        print("Sum:", total)

    elif choice == 4:
        n = int(input("Enter N: "))
        fact = 1
        for i in range(1, n + 1):
            fact *= i
        print("Factorial:", fact)

    elif choice == 5:
        n = int(input("Enter number: "))
        for i in range(1, 11):
            print(n, "x", i, "=", n * i)

    elif choice == 6:
        x = int(input("Enter number to search: "))
        for i in range(len(nums)):
            if nums[i] == x:
                print("Found at index", i)
                break
        else:
            print("Not found")

    elif choice == 7:
        n = int(input("Enter N: "))
        for i in range(1, n + 1):
            if i % 3 == 0:
                continue
            print(i)

    elif choice == 8:
        print("Program terminated.")
        break

    else:
        print("Invalid choice.")
        pass
