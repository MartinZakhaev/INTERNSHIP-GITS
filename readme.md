### Penjelasan singkat nomor 3:

Ukuran kompleksitas ruang dan waktu untuk soal nomor 3 adalah O(n)

### Penjelasan detail nomor 3:

##### Mengapa kompleksitas waktu untuk soal nomor 3 adalah O(n)?

-Kompleksitas waktu adalah waktu yang dibutuhkan oleh suatu algoritma untuk menyelesaikan suatu masalah.

-Kompleksitas ruang adalah jumlah memori yang dibutuhkan oleh suatu algoritma untuk menyelesaikan suatu masalah.

Karena pada soal nomor 3 digunakan stack untuk menyimpan data, maka kompleksitas ruang untuk soal nomor 3 adalah O(n). Mengapa O(n)? Dalam worst case scenario, misal bracket hanya berisi bracket pembuka, semua bracket tersebut akan disimpan ke dalam stack, oleh karena itu panjang dari stack akan sebanding dengan panjang dari input string (artinya, stack bisa menampung hingga n elemen, maka kompleksitas ruangnya adalah O(n)). Lalu, setiap char pada string input akan diproses satu kali (artinya, waktu untuk prosesnya linear terhadap panjang string input). Maka, kompleksitas waktu untuk soal nomor 3 adalah O(n).

##### Contoh

Misal input string adalah "{[()]}"

1. Kita menemui "{" → push ke stack.
2. Kita menemui "[" → push ke stack.
3. Kita menemui "(" → push ke stack.
4. Kita menemui ")" → pop dari stack (cocok dengan "(" ).
5. Kita menemui "]" → pop dari stack (cocok dengan "[" ).
6. Kita menemui "}" → pop dari stack (cocok dengan "{" ).

\*Setiap char diproses satu kali
