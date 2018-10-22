function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
}

window.onload = function () {
    var menuElem = document.getElementById('dropdown-menu'),
    titleElem = menuElem.querySelector('.tit');
    document.onclick = function (event) {
        var target = elem = event.target;
        while (target != this) {
            if (target == menuElem) {
                if (elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
                menuElem.classList.toggle('open')
                return;
            }
            target = target.parentNode;
        }
        menuElem.classList.remove('open');
    }
}
