const Data = [
    { id: 1, name: "Graphic AMD 3060", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/graphic1.jpg", image1: "./images/loptop1.jpg", image2: "./images/loptop2.jpg", price: 2000000, new: true, unique: false, qty: 1, store: true, festival: false, code: 54635 },
    { id: 2, name: "Loptop Asus", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/loptop1.jpg", price: 4500000, new: true, unique: false, qty: 1, store: true, festival: false, code: 54635 },
    { id: 3, name: "Loptop Lenovo", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/loptop2.jpg", price: 3200000, new: false, unique: false, qty: 1, store: true, festival: true, code: 44635 },
    { id: 4, name: "Loptop HP", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/loptop3.jpg", price: 4560000, new: false, unique: false, qty: 1, store: true, festival: true, code: 24135 },
    { id: 5, name: "Loptop Lenovo Thinkpad", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/loptop4.jpg", price: 1000000, new: true, unique: true, qty: 1, store: true, festival: false, code: 33635 },
    { id: 6, name: "Monitor 360deg", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/monitor1.jpg", price: 2350000, new: true, unique: false, qty: 1, store: true, festival: true, code: 59985 },
    { id: 7, name: "Monotor Samsung", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/monitor2.jpg", price: 5600000, new: true, unique: false, qty: 1, store: false, festival: true, code: 23455 },
    { id: 8, name: "Printer 78", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/printer1.jpg", price: 7600000, new: false, unique: false, qty: 1, store: true, festival: false, code: 24341 },
    { id: 9, name: "Tablet Lenovo", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/tablet-pink.jpg", price: 3000000, new: false, unique: true, qty: 1, store: true, festival: true, code: 84635 },
    { id: 10, name: "Loptop HP", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/loptop2.jpg", price: 5460000, new: false, unique: false, qty: 1, store: true, festival: false, code: 74635 },
    { id: 11, name: "Loptop Asus", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/loptop4.jpg", price: 2300000, new: false, unique: true, qty: 1, store: true, festival: false, code: 98635 },
    { id: 12, name: "Graphic AMD", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/graphic1.jpg", price: 9800000, new: true, unique: false, qty: 1, store: true, festival: false, code: 64635 },
    { id: 13, name: "Tablet Samsung", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/tablet-pink.jpg", price: 7600000, new: true, unique: false, qty: 1, store: true, festival: true, code: 37635 },
    { id: 14, name: "Monitor LG", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/monitor2.jpg", price: 4800000, new: false, unique: true, qty: 1, store: true, festival: true, code: 81635 },
    { id: 15, name: "Printer 2050", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/printer1.jpg", price: 6500000, new: true, unique: false, qty: 1, store: true, festival: false, code: 90635 },
    { id: 16, name: "Loptop Asus", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/loptop2.jpg", price: 9270000, new: false, unique: false, qty: 1, store: true, festival: true, code: 60635 },
    { id: 17, name: "Monitor HTC", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/monitor2.jpg", price: 4000000, new: true, unique: false, qty: 1, store: true, festival: false, code: 32635 },
    { id: 18, name: "Tablet Xiaomi", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/tablet-pink.jpg", price: 4500000, new: false, unique: true, qty: 1, store: true, festival: false, code: 65764 },
    { id: 19, name: "Printer CMD", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/printer1.jpg", price: 4800000, new: false, unique: false, qty: 1, store: true, festival: false, code: 24176 },
    { id: 20, name: "Loptop Ride 4080", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", image: "./images/loptop2.jpg", price: 8100000, new: false, unique: true, qty: 1, store: true, festival: false, code: 12455 },
]
export default Data