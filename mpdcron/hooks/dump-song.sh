#!//bin/sh
nowplaying=$HOME/descargas/compilando/totoloco.github.com/now_playing.js
gitdir=$HOME/descargas/compilando/totoloco.github.com

lines=$(wc -l $nowplaying | sed 's/ .*//')
sed -i ${lines}d $nowplaying


echo ',{"title": "$MPD_SONG_TAG_TITLE", "artist": "$MPD_SONG_TAG_ARTIST", "album": "$MPD_SONG_TAG_ALBUM", "track": "$MPD_SONG_TAG_TRACK", "genre": "$MPD_SONG_TAG_GENRE", "date": $(date +%s)}
]);' >> $nowplaying

cd $gitdir
git commit -a -m 'playing'
git push
cd -
