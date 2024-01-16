#!/bin/bash

#!/bin/bash

forras_konyvtar="/home/tz/code/develop/node/otthonzona/"
cel_konyvtar="/home/tz/code/develop/node/otthonzona_test/"
kihagyott_konyvtarak=("$forras_konyvtar/.git" "$forras_konyvtar/.idea")

shopt -s dotglob  # Engedélyezzük a rejtett fájlok és könyvtárak kezelését (., .., stb.)

for file in "$forras_konyvtar"/*; do
    if [ -f "$file" ] && [[ ! " ${kihagyott_konyvtarak[@]} " =~ " $file " ]]; then
        cp "$file" "$cel_konyvtar"/
    elif [ -d "$file" ] && [[ ! " ${kihagyott_konyvtarak[@]} " =~ " $file " ]]; then
        cp -r "$file" "$cel_konyvtar"/  # Rekurzív másolás az alkönyvtárak esetében
    fi
done

cd "$cel_konyvtar" || exit
git add --all
commit_message="Automatikus commit - $(date +'%Y-%m-%d %H:%M:%S')"
git commit -m "$commit_message"
git push origin main

