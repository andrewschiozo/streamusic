<?php

class PlayList
{
	public $musics;

	public function __construct()
	{
		$this->musics = [];
	}

	public function add(Music $music)
	{
		$this->musics[] = $music;
		return $this;
	}

	public function output()
	{
		echo json_encode(['status' => true, 'data' => $this->musics, 'message' => null]);
	}
}
