# MaxLengthWarner

MaxLengthWarner is a Chrome extension which warns the user if they are entering input past the maximum length of an `input` tag.

<p align="center">
    <img align="center" src="https://github.com/jamespwilliams/MaxLengthWarner/raw/master/assets/example.gif" width="500px">
</p>

When using long passwords on sites which set the maximum length of `input` tags, there is no way to tell whether you're entering password characters past the maximum length of the field. This extension adds a shake effect to these fields, in order to warn the user of the fact that their input is not being registered.

The extension will be injected into any site, and should work on any input field where the `maxLength` JS DOM property is set. This also includes `input` tags where `maxlength` is set.

https://chrome.google.com/webstore/detail/maxlengthwarner/mpponigpclkmpdamdedffdlhcgdjcijn
