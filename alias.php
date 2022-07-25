<?php

foreach (glob("articles/*/index.html") as $filename) {
  $content = file_get_contents($filename);
  $matches = [];
  if (preg_match("/src: ('?.*'?)/", $content, $matches)) {
    for ($i = 1;  $i < count($matches); $i++) {
      $src = trim($matches[$i], "'");
      $content = str_replace("src: {$matches[$i]}", "src: 'attached/$src'", $content);
    }
    file_put_contents($filename, $content);
  }
}
