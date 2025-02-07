let ft_list = document.getElementById("ft_list");
const create = () => {
    let lis = document.getElementById("todo").value;
    const name = new Date().getTime();
    document.cookie = `${name}=${lis}`;
    let node = document.createElement("div");
    node.onclick = () => {
        const check = confirm("Confirm deletion?");
        if (check) {
            node.remove();
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        }
    };
    node.innerHTML = lis;
    ft_list.prepend(node);
};

const check = document.cookie;
if (check.length > 0) {
    const cookie = check.split(";");
    cookie.forEach((element) => {
        var node = document.createElement("div");
        node.onclick = () => {
            const check = confirm("Confirm deletion?");
            if (check) {
                node.remove();
                document.cookie =
            element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }
        };
    node.innerHTML = element.split("=")[1];
    ft_list.prepend(node);
    });
}