export function generateLorem2P(parent: HTMLElement) {
    const nodeString: string = `<h1>Lorem Ipsum</h1>
    <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
    <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
    
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan purus a lorem maximus, vitae viverra nisi sagittis. Maecenas accumsan diam non posuere facilisis. Morbi velit risus, faucibus quis arcu et, efficitur malesuada risus. Vestibulum tincidunt facilisis ligula. In pellentesque turpis ipsum, nec maximus odio egestas sit amet. Fusce accumsan tristique facilisis. Quisque quis augue non mauris gravida tincidunt. Fusce ante elit, faucibus nec fermentum id, tempor eu nibh. Pellentesque congue massa sit amet metus faucibus hendrerit. Duis blandit tortor sed cursus rutrum. Vivamus volutpat iaculis justo, sed sodales nisl aliquet et. Sed tortor risus, gravida ac efficitur non, commodo vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ipsum metus, aliquam nec diam id, euismod eleifend justo. Mauris non malesuada purus, id tempor nisl. Curabitur lectus lorem, tristique eget ultricies consequat, varius quis purus.
    </p>
    <p>
    Suspendisse leo erat, congue a orci non, consectetur dignissim nulla. Cras vehicula nulla enim, eu sodales enim sollicitudin quis. Vestibulum laoreet sem nec dolor facilisis posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis orci faucibus, mattis nisl sed, ullamcorper tellus. Nulla suscipit est erat, et pulvinar orci tempus pretium. Vestibulum maximus enim eu neque convallis, nec elementum metus vulputate. Praesent non condimentum velit.</p>`;

    parent.insertAdjacentHTML("beforeend", nodeString);
}

export function generateLorem1P(parent: HTMLElement) {
    const nodeString: string = `<h1>Lorem Ipsum</h1>
    <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
    <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
    
    
    <p>
    Suspendisse leo erat, congue a orci non, consectetur dignissim nulla. Cras vehicula nulla enim, eu sodales enim sollicitudin quis. Vestibulum laoreet sem nec dolor facilisis posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis orci faucibus, mattis nisl sed, ullamcorper tellus. Nulla suscipit est erat, et pulvinar orci tempus pretium. Vestibulum maximus enim eu neque convallis, nec elementum metus vulputate. Praesent non condimentum velit.</p>`;

    parent.insertAdjacentHTML("beforeend", nodeString);
}
