// Menggunakan async-await dan Promise
const showDownload = (result) => {
    console.log("Download selesai")
    console.log(`Hasil Download: ${result}`)
  }
  
  // Menggunakan async-await dan Promise
  const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe"
        resolve(result)
      }, 3000)
    });
  };
  
  // Menggunakan async-await
  const initiateDownload = async () => {
    try {
      const result = await download()
      showDownload(result)
    } catch (error) {
      console.error("Gagal melakukan download:", error)
    }
  };
  
  initiateDownload();
  