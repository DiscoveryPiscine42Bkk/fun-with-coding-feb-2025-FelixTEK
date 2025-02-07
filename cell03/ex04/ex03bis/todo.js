$(document).ready(function() {
    let $ft_list = $("#ft_list");

    const create = () => {
        let lis = $("#todo").val();
        const name = new Date().getTime();
        document.cookie = `${name}=${encodeURIComponent(lis)}`;
        let $node = $("<div></div>");
        $node.on("click", function() {
            const check = confirm("Confirm deletion?");
            if (check) {
                $node.remove();
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }
        });
        $node.text(lis);
        $ft_list.prepend($node);
    };

    const check = document.cookie;
    if (check.length > 0) {
        const cookies = check.split("; ");
        cookies.forEach((element) => {
            let $node = $("<div></div>");
            $node.on("click", function() {
                const check = confirm("Confirm deletion?");
                if (check) {
                    $node.remove();
                    document.cookie = element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                }
            });
            $node.text(decodeURIComponent(element.split("=")[1]));
            $ft_list.prepend($node);
        });
    }

    $("#createButton").on("click", create);
});