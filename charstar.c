#include <stdio.h>
#include <stddef.h>

//orginial version
size_t mystrlen(const char *s) {
    if (s == NULL) {
        return 0;
    }
    size_t len = 0;
    const char *p = s;
    while (*p != '\0') {
        len++;
        p++;
    }
    return len;
}

//reduced 
size_t mystrlen(const char *s) {
    size_t len = 0;
    while (s[len] != '\0') {
        len++;
    }
    return len;
}
//orginial version
char *simple_split(char *s, char delim) {
    if (s == NULL || *s == '\0') {
        return NULL;
    }
    char *current = s;
    while (*current != '\0' && *current != delim) {
        current++;
    }
    if (*current == delim) {
        *current = '\0';
        return current + 1;
    }
    return NULL;
}
//reduced
char *simple_split(char *s, char delim) {
    if (s == NULL || s[0] == '\0') {
        return NULL;
    }
    char *p = s;
    while (*p != '\0') {
        if (*p == delim) {
            *p = '\0';
            return p + 1;
        }
        p++;
    }
    return NULL;
}
