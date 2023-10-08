#include <bits/stdc++.h>
#include <algorithm>
using namespace std;

int isPrime(int n)
{
    if (n <= 1)
        return 0;

    if (n == 2 || n == 3)
        return 1;

    if (n % 2 == 0 || n % 3 == 0)
        return 0;

    for (int i = 5; i * i <= n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return 0;

    return 1;
}



int main()
{

    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
        cin >> arr[i];

    vector<int> v;
    for (int i = 0; i < n; i++){
        if (isPrime(arr[i])){
            v.push_back(i);
        }
    }

    if (v.size() == 0)
        cout<< -1;
    else if (v.size() == 1)
        return 0;
    else
        return v[v.size() - 1] - v[0];
}