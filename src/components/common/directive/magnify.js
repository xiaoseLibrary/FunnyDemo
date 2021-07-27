const magnify = {
  inserted(el) {
    el.addEventListener("click", function(e) {
      e.stopPropagation();
      el.style.visibility = "hidden";
      const imgSrc = el.getAttribute("src");
      let _showImg_ = document.getElementById("__showImg__");
      if (_showImg_) {
        _showImg_.style.display = "flex";
        const childImg = _showImg_.childNodes[0];
        childImg.setAttribute("src", imgSrc);
      } else {
        _showImg_ = document.createElement("div");
        const body = document.body;
        _showImg_.innerHTML = `<img src="${imgSrc}" style="max-width: 100%;width:20%" />`;
        _showImg_.setAttribute("id", "__showImg__");
        _showImg_.setAttribute(
          "style",
          "display: flex;justify-content: center;align-items:center;position:fixed;z-index:1000;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,0.7);"
        );
        body.appendChild(_showImg_);

        _showImg_.addEventListener("click", function(e1) {
          e1.stopPropagation();
          this.style.display = "none";
          el.style.visibility = "unset";
          setTimeout(() => {
            body.removeChild(_showImg_);
          }, 300);
        });
        window.addEventListener("scroll", function() {
          el.style.visibility = "unset";
          _showImg_.style.display = "none";
          setTimeout(() => {
            if (_showImg_.ownerDocument.body.contains(_showImg_)) {
              body.removeChild(_showImg_);
            }
          }, 300);
        });
      }
    });
  }
};
export default magnify;
