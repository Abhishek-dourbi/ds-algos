function power(base, exp){
    if (!exp) return 1;
    return base * power(base, exp - 1)
}