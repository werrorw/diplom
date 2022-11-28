burger = document.querySelector('.burger');
bm = document.querySelector('.burger__menu');
closes = document.querySelector('.close');
url__one = document.querySelector('.url__one');
url__two = document.querySelector('.url__two');
url__tree = document.querySelector('.url__tree');
url__four = document.querySelector('.url__four');
url__five = document.querySelector('.url__five');
url__six = document.querySelector('.url__six');

burger.addEventListener('click', function() {
    bm.classList.add('amogus');
    closes.classList.add('amogus');
    burger.classList.add('amogus');
});

closes.addEventListener('click', function() {
    bm.classList.remove('amogus');
    burger.classList.remove('amogus');
    closes.classList.remove('amogus');
});

url__one.addEventListener('click', function() { deletes(); });
url__two.addEventListener('click', function() { deletes(); });
url__tree.addEventListener('click', function() { deletes(); });
url__four.addEventListener('click', function() { deletes(); });
url__five.addEventListener('click', function() { deletes(); });
url__six.addEventListener('click', function() { deletes(); });

function deletes() {
    bm.classList.remove('amogus');
    burger.classList.remove('amogus');
    closes.classList.remove('amogus');
}
